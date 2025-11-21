import { useRef } from "react";
import Button from "../components/button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
//import { useAuth, User } from "../components/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";


function AddProducts() {

    const formRef = useRef();
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    if (!user?.isAdmin) {
        return navigate("/Productos");
    }


    const submit = async (data) => {

        for (const [key, value] of Object.entries(data)) {
            if (value === null || value === undefined || value === "") {
                alert('Debes rellenar el campo: ' + key);
                return;
            }
        }

        const productsRef = collection(db, "products");

        addDoc(productsRef, data);
        alert("Producto añadido!");
        formRef?.current?.reset();

    }

    return (


        <div className="container-form">
            <form ref={formRef} onSubmit={handleSubmit(submit)} className="flex-vertical form">

                <h1 className="title">Registre un producto</h1>

                <input type="text" placeholder="Ingresa su nombre" {...register("name")} />
                <input type="text" placeholder="Ingresa su descripcion" {...register("description")} />
                <input type="number" placeholder="Ingresa su precio" {...register("price")} />
                <input type="number" placeholder="Ingresa su stock disponible" {...register("stock")} />
                <input type="url" placeholder="Ingresa el link de su imagen" {...register("image")} />

                <div>
                    <Button text="Registrar" type="submit" className="submit rounded white-bg" />
                    <Button text="Volver" type="button" onClick={() => navigate("/Productos")} />
                </div>

            </form>
        </div>
    )

} export default AddProducts;