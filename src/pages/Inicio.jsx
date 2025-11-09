import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <div>
            <div class="container-element">

                <Header />

                <section class="content">
                    <a href="#" class="servicios cont">
                        <h2>Servicios</h2>
                        <p>Mas acerca de nuestros Servicios &RightArrow;</p>
                    </a>
                    <a href="#" class="recorridos half">
                        <h2>Recorridos</h2>
                        <p>Al infinito y...</p>
                    </a>
                    <a href="horario.html" class="horarios half">
                        <h2>Horarios</h2>
                        <p>Cuando puedes visitarnos &starf;</p>
                    </a>
                    <a href="#" class="ubicacion half">
                        <h2>Ubicanos</h2>
                        <p>El lugar perfecto &star;</p>
                    </a>
                    <a href="galaxias_vecinas.html" class="galaxias half">
                        <h2>Galaxias Vecinas</h2>
                        <p>Estamos solos?</p>
                    </a>

                    <Link to="/SolarSystem" class="educacion cont">
                        <h2>Aprende acerca de nuestro hogar</h2>
                        <p>Espacio educativo &RightArrow;</p>
                    </Link>

                    <a href="productos.html" class="productos cont">
                        <h2>Productos</h2>
                        <p>Nuevas emociones &#128230;</p>
                    </a>
                    <a href="#" class="novedades cont">
                        <h2>Novedades</h2>
                        <p>Enterate de lo mas reciente &#9668;</p>
                    </a>
                </section>

                <Footer />

            </div>
        </div >
    );
}

