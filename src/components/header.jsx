import "../CSS/header.css";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Button from "./button";

export default function Header() {

    const { isLoggedIn, user, LogOut } = useAuth();


    return (
        <header>

            <div className="container-title-logo">
                <img src="src/assets/logo.png" alt="Logo de empresa" title="Planetario LPC" width="248" height="248" className="logo" />
                <h1>LPC PLANETARIO</h1>
            </div>

            <nav>

                <div className="container-card">
                    <Link to="/" className="card-header">
                        <img src="src/assets/png/home.png" alt="Icono de Inicio" title="¡Ve al inicio!" width="512" height="512" className="front-face" />
                    </Link>
                </div>

                <div className="container-card">
                    <Link to="/SolarSystem" className="card-header">
                        <img src="src/assets/png/book.png" alt="Icono de libro" title="¡Aprende sobre el sistema solar!" width="512" height="512" className="front-face" />
                    </Link>

                </div>

                {
                    !isLoggedIn &&
                    <div className="container-card">
                        <Link to="/Login" className="card-header">
                            <img src="src/assets/png/login.png" alt="image_login" title="¡Inicia sesion en tu cuenta!" width="512" height="512" className="front-face" />
                        </Link>
                    </div>

                }

                {
                    isLoggedIn &&

                    <div className="user-setting">
                        <div className="container-card">
                            <Link to="/Cart" className="card-header">
                                <img src="src/assets/png/carrito.png" alt="image_carrito" title="¡Ve lo que hay en tu carrito de compras!" width="512" height="512" className="front-face" />
                            </Link>
                        </div>
                        <Button text="Cerrar sesion" onClick={LogOut} />
                        <p>{user?.name}</p>

                    </div>

                }

            </nav>

        </header>
    );
}