import Header from "../components/header";
import Footer from "../components/footer";
import "../CSS/productos.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import ProductList from "../components/productList";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

export default function Productos() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
            try {
                const productsRef = collection(db, "products");
                getDocs(productsRef)
                    .then((resp) => {
                        setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                    });
            } catch (error) {
                console.error("Error obteniendo los productos: ", error);
            }
    }, []);



    return (
        <div className="productos-box">
            <Header />
            <div class="container-product">

                <div>
                    <h2>Productos</h2>
                    <Button text="Añadir productos" onClick={() => navigate("/Productos/add")} />
                    
                </div>
                <ProductList products={products} />
                    
            </div>
            <Footer />
        </div>
    );
}