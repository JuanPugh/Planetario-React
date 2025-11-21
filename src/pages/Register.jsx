import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/header";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "../components/AuthContext";
import { useForm } from "react-hook-form";


function Register() {

    const { setUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const submit = (data) => {

        console.log(data);

        const usersRef = collection(db, "users");
        const userData = {
            ...values,
        }


        addDoc(usersRef, { ...userData, isAdmin: false }).then((doc) => {
            setUser(userData)
        });

        navigate("/");

    }



    return (
        <>

            <Header />

            <div className="container-form">

                <form onSubmit={handleSubmit(submit)} className="flex-vertical form">

                    <h1 className="title">Register</h1>

                    <label htmlFor="email">Name:</label>
                    <input type="text" placeholder="Ingrese su nombre de usuario" {...register("name")} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Ingrese su mail" {...register("email")} />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" placeholder="Ingrese su contraseña" {...register("password")} />

                    <Button text="Iniciar sesion" type="submit" className="submit rounded white-bg" />

                    <div className="form-switch">
                        <p>Ya tienes una cuenta? </p>
                        <Link to="/Login">Inicia sesion!</Link>
                    </div>


                </form>
            </div>
        </>

    )

} export default Register;