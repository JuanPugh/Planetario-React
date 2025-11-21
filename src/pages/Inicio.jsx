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
                <Link to="/Nosotros" className="servicios cont">
                    <h2>Nosotros</h2>
                    <p>Mas acerca de nosotros</p>
                </Link>
                <Link to="/Recorridos" className="recorridos half">
                    <h2>Recorridos</h2>
                    <p>Al infinito y...</p>
                </Link>
                <Link to="/Horarios" className="horarios half">
                    <h2>Horarios</h2>
                    <p>Cuando puedes visitarnos</p>
                </Link>
                <a href="https://www.google.com/maps/dir//Lanín+2020,+Q8300+Neuquén/@-38.9648456,-68.1290172,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x960a33b795c819a7:0x65c00b69eb2c3f1d!2m2!1d-68.0877317!2d-38.9648529?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" className="ubicacion half">
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

