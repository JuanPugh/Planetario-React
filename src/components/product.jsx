import { deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";

function DeleteProduct(id) {

    deleteDoc(doc(db, "products", id))
        .then(() => {
            console.log("Product deleted");
        })
        .catch(err => console.error(err));

}

const Product = ({ product }) => {


    const { user } = useAuth();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    return (
        <div className="card">
            <div className="front-face">
                <img src={"" + product.image + ""} alt="" />
                <div className="nombre">
                    <p>{product.name}</p>
                </div>
            </div>
            <span className="back-face">
                <p>
                    {product.description}
                </p>
                <Button text="Comprar" onClick={() => addToCart(product)} />
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
