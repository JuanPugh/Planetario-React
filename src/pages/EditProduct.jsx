import { useEffect, useRef } from "react";
import Button from "../components/button";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
//import { useAuth, User } from "../components/AuthContext";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";


function EditProduct() {

    const formRef = useRef();
    const { register, handleSubmit } = useForm();

    const { id } = useParams();

    useEffect(() => {
        const ref = doc(db, "products", id);
        getDoc(ref)
            .then((resp) => {
                console.log(resp.data());
            })
    })

    /*
    if (!user?.isAdmin) {
        return (<Navigate replace={true} to="/products" />)
    }
    */

    //console.log(product);


    const submit = async (data) => {

        for (const [key, value] of Object.entries(data)) {
            if (value === null || value === undefined || value === "") {
                alert('Debes rellenar el campo: ' + key);
                return;
            }
        }



        setDoc(productRef, data);
        alert("Producto actualizado!");
        formRef?.current?.reset();

        //return (<Navigate replace={true} to="/login" />)
    }

    return (


        <>
            <form ref={formRef} onSubmit={handleSubmit(submit)} className="flex-vertical">

                <h1 className="title">Registre un producto</h1>

                <input type="text" placeholder="Ingresa su nombre" {...register("name")} />
                <input type="text" placeholder="Ingresa su descripcion" {...register("description")} />
                <input type="number" placeholder="Ingresa su precio" {...register("price")} />
                <input type="number" placeholder="Ingresa su stock disponible" {...register("stock")} />
                <input type="url" placeholder="Ingresa el link de su imagen" {...register("image")} />


                <Button text="Registrar" type="submit" className="submit rounded white-bg" />


            </form>
        </>
    )

} export default EditProduct;