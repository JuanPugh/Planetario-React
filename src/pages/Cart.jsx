import { useCart } from "../components/CartContext";
import Header from "../components/header";
import { useAuth } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

export default function Cart() {
    const { cart, removeFromCart, total, clearCart } = useCart();
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return (<Navigate replace={true} to="/Productos" />)
    }

    return (
        <>

            <Header />
            <div className="container-cart">



                <div className="form cart">

                    <h1>Carrito</h1>

                    {cart.length === 0 && <p>Tu carrito está vacío</p>}

                    {cart.map(item => (
                        <div key={item.id}>
                            <p>{item.name} x {item.qty}</p>
                            <p>${item.price * item.qty}</p>
                            <button className="submit" onClick={() => removeFromCart(item.id)}>
                                eliminar
                            </button>
                        </div>
                    ))}

                    <h2>Total: ${total}</h2>

                    {cart.length > 0 && (
                        <button className="submit" onClick={clearCart}>
                            Vaciar carrito
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}