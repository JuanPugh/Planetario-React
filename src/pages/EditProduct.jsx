import { useEffect, useRef, useState } from "react";
import Button from "../components/button";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "../components/AuthContext";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function EditProduct() {

    const formRef = useRef();
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const [product, setProduct] = useState();

    const { id } = useParams();
    const navigate = useNavigate();

    if (!user?.isAdmin) {
        return navigate("/Productos");
    }

    useEffect(() => {
        const ref = doc(db, "products", id);
        getDoc(ref)
            .then((resp) => {
                setProduct(resp.data());
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

        const productRef = doc(db, "products", id);

        setDoc(productRef, data);
        alert("Producto actualizado!");


        navigate("/Productos");
    }

    return (

        <div className="container-form">
            <form ref={formRef} onSubmit={handleSubmit(submit)} className="flex-vertical form">

                <h1 className="title">Editar un producto</h1>

                {
                    product &&
                    <>
                        <input type="text" defaultValue={product.name} placeholder="Ingresa su nombre" {...register("name")} />
                        <input type="text" defaultValue={product.description} placeholder="Ingresa su descripcion" {...register("description")} />
                        <input type="number" defaultValue={product.price} placeholder="Ingresa su precio" {...register("price")} />
                        <input type="number" defaultValue={product.stock} placeholder="Ingresa su stock disponible" {...register("stock")} />
                        <input type="url" defaultValue={product.image} placeholder="Ingresa el link de su imagen" {...register("image")} />

                        <div>

                            <Button text="Editar" type="submit" className="submit rounded white-bg" />
                            <Button text="Volver" type="button" onClick={() => navigate("/Productos")} />

                        </div>
                    </>
                }



            </form>
        </div>
    )

} export default EditProduct;