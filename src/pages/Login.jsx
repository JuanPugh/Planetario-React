import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
import "../CSS/login.css";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/header";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "../components/AuthContext";
import { useForm } from "react-hook-form";


function Login() {

    const { LogIn, setUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const submit = (data) => {

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", data.email), where("password", "==", data.password));

        getDocs(q)
            .then((resp) => {

                if (resp.docs.length > 0) {

                    const userData = resp.docs[0].data();

                    LogIn(userData);
                    navigate("/");
                } else {
                    alert("No tienes una cuenta!")
                }
            });

    }



    return (
        <>

            <Header />

            <div className="container-form">

                <form onSubmit={handleSubmit(submit)} className="flex-vertical form">

                    <h1 className="title">Log In</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Ingrese su mail" {...register("email")} />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" placeholder="Ingrese su contraseña" {...register("password")} />

                    <Button text="Iniciar sesion" type="submit" className="submit rounded white-bg" />

                    <div className="form-switch">
                        <p>No tienes una cuenta? </p>
                        <Link to="/Register">Crea una!</Link>
                    </div>


                </form>
            </div>
        </>

    )

} export default Login;