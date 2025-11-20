import { useState, useRef } from "react";
import Input from "../components/input";
import Button from "../components/button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
//import { useAuth, User } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

function AddProducts() {

    const formRef = useRef();

    /*
    if (!user?.isAdmin) {
        return (<Navigate replace={true} to="/products" />)
    }
    */

    const [values, setValues] = useState({

        name: "",
        material: "",
        description: "",
        price: "",
        stock: "",
    })

    const handleChange = (e) => {

        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const productsRef = collection(db, "products");
        const productData = {
            ...values,
            image: "a"
        }

        addDoc(productsRef, productData);
        alert("Producto añadido!");
        formRef?.current?.reset();

        //return (<Navigate replace={true} to="/login" />)
    }

    return (


        <>
            <form ref={formRef} onSubmit={handleSubmit} className="flex-vertical">

                <h1 className="title">Registre un producto</h1>

                <Input name="Name" onChange={handleChange} type="text" />
                <Input name="Material" onChange={handleChange} type="text" />
                <Input name="Description" onChange={handleChange} type="text" />
                <Input name="Price" onChange={handleChange} type="number" />
                <Input name="Stock" onChange={handleChange} type="number" />

                <Button text="Registrar" type="submit" className="submit rounded white-bg" />


            </form>
        </>
    )

} export default AddProducts;