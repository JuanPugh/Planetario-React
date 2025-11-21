import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../CSS/inicio.css";
import { useAuth } from "../components/AuthContext";

export default function Inicio() {

    const { user } = useAuth();

    console.log(user);

    return (
        <div className="container-element">

            <Header />

            <section className="content-inicio">
                <a href="#" className="servicios cont">
                    <h2>Nosotros</h2>
                    <p>Mas acerca de nosotros</p>
                </a>
                <a href="#" className="recorridos half">
                    <h2>Recorridos</h2>
                    <p>Al infinito y...</p>
                </a>
                <Link to="/Horarios" className="horarios half">
                    <h2>Horarios</h2>
                    <p>Cuando puedes visitarnos</p>
                </Link>
                <a href="#" className="ubicacion half">
                    <h2>Ubicanos</h2>
                    <p>El lugar perfecto</p>
                </a>
                <Link to="/GalaxiasVecinas" className="galaxias half">
                    <h2>Galaxias Vecinas</h2>
                    <p>Estamos solos?</p>
                </Link>

                <Link to="/SolarSystem" className="educacion cont">
                    <h2>Aprende acerca de nuestro hogar</h2>
                    <p>Espacio educativo</p>
                </Link>

                <Link to="/Productos" className="productos cont">
                    <h2>Productos</h2>
                    <p>Nuevas emociones &#128230;</p>
                </Link>
                <a href="#" className="novedades cont">
                    <h2>Novedades</h2>
                    <p>Enterate de lo mas reciente &#9668;</p>
                </a>
            </section>

            <Footer />

        </div>
    );
}

