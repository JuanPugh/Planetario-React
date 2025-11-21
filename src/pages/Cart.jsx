import { useCart } from "../components/CartContext";

export default function Cart() {
    const { cart, removeFromCart, total, clearCart } = useCart();

    return (
        <div>
            <h1>Carrito</h1>

            {cart.length === 0 && <p>Tu carrito está vacío</p>}

            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name} x {item.qty}</p>
                    <p>${item.price * item.qty}</p>
                    <button onClick={() => removeFromCart(item.id)}>
                        eliminar
                    </button>
                </div>
            ))}

            <h2>Total: ${total}</h2>

            {cart.length > 0 && (
                <button onClick={clearCart}>
                    Vaciar carrito
                </button>
            )}
        </div>
    );
}