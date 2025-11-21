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
                    <Link to="/" className="card">
                        <img src="src/assets/png/home.png" alt="Icono de Inicio" title="¡Ve al inicio!" width="512" height="512" className="front-face" />
                        <span className="back-face">Inicio</span>

                    </Link>
                </div>

                <div className="container-card">
                    <Link to="/SolarSystem" className="card">
                        <img src="src/assets/png/book.png" alt="Icono de libro" title="¡Aprende sobre el sistema solar!" width="512" height="512" className="front-face" />
                        <span className="back-face">Aprender</span>
                    </Link>

                </div>

                {
                    !isLoggedIn &&
                    <div className="container-card">
                        <Link to="/Login" className="card">
                            <img src="src/assets/png/login.png" alt="image_login" title="¡Inicia sesion en tu cuenta!" width="512" height="512" className="front-face" />
                            <span className="back-face">
                                Login</span>
                        </Link>
                    </div>

                }

                {
                    isLoggedIn &&

                    <div>
                        <Button text="Cerrar sesion" onClick={LogOut} />
                        {user?.name}

                    </div>

                }

            </nav>

        </header>
    );
}