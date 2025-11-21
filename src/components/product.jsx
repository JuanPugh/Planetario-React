import { deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function DeleteProduct(id) {

    deleteDoc(doc(db, "products", id))
        .then(() => {
            console.log("Product deleted");
        })
        .catch(err => console.error(err));

}

const Product = ({ product }) => {


    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div class="card">
            <div class="front-face">
                <img src={"" + product.image + ""} alt="" />
                <div class="nombre">
                    <p>{product.name}</p>
                </div>
            </div>
            <span class="back-face">
                <p>
                    {product.description}
                </p>
                <Button text="Comprar" />
                {
                    user?.isAdmin &&
                    <>

                        <Button text="Editar" onClick={() => navigate("/Productos/edit/" + product.id)} />
                        <Button text="Eliminar" onClick={() => DeleteProduct(product.id)} />
                    </>
                }
            </span>
        </div>
    );
};
export default Product;
