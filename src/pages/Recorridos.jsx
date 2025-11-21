import "../CSS/galaxias_vecinas.css";
import Header from "../components/header";
import Footer from "../components/footer";


export default function Recorridos() {
    return (
        <div className="container-element">
            <Header />
            <section className="container-galaxias">
                <div className="title">
                    <h2>LOS 5 RECORRIDOS DE NUESTRO ESTABLECIMIENTO</h2>
                </div>


                <div className="content-galaxia galaxia-can">
                    <img src="src/assets/Galaxias/galaxiacan.jpg" alt="galaxiacan" title="Recorrido 1" width="640" height="320" />
                    <div className="text">
                        <h3> Recorrido Introductorio </h3>
                        <p> Este recorrido guía a los visitantes por la primera sala temática del establecimiento, donde se presenta una visión general del lugar mediante elementos visuales interactivos y estaciones informativas. Es el punto de partida ideal para orientarse antes de avanzar hacia las demás áreas y actividades.</p>
                    </div>
                </div>


                <div className="content-galaxia galaxia-eliptica">
                    <div className="text">
                        <h3> Recorrido de Exploración Sensorial </h3>
                        <p> Este recorrido conduce a una zona inmersiva en la que los visitantes experimentan distintas sensaciones a través de efectos visuales y ambientales. A lo largo del trayecto se atraviesan pasillos envolventes y módulos que invitan a descubrir nuevas perspectivas dentro del establecimiento.</p>
                    </div>
                    <img src="src/assets/Galaxias/galaxiaeliptica.jpg" alt="galaxiaeliptica" title="Recorrido 2" width="1920" height="1080" />
                </div>


                <div className="content-galaxia galaxia-magallanes">
                    <img src="src/assets/Galaxias/galaxiamagallanes.jpg" alt="galaxiamagallanes" title="Recorrido 3" width="660" height="330" />
                    <div className="text">
                        <h3> Recorrido Educativo Central </h3>
                        <p> En este recorrido, los visitantes atraviesan la sección más informativa del establecimiento. Allí se encuentran módulos explicativos, demostraciones temáticas y áreas que permiten comprender la estructura y funcionamiento de las instalaciones de manera clara y guiada.</p>
                    </div>
                </div>


                <div className="content-galaxia galaxia-bootes">
                    <div className="text">
                        <h3> Recorrido Avanzado </h3>
                        <p> Este recorrido está diseñado para quienes buscan profundizar más. Incluye zonas especializadas con explicaciones detalladas y actividades orientadas a explorar aspectos más complejos del establecimiento, mediante recursos interactivos y estaciones de análisis.</p>
                    </div>
                    <img src="src/assets/Galaxias/galaxiabootes.jpg" alt="galaxiabootes" title="Recorrido 4" width="1370" height="768" />
                </div>


                <div className="content-galaxia galaxia-magallanespeque">
                    <img src="src/assets/Galaxias/galaxiamagallanespeque.jpg" alt="galaxiamagallanespeque" title="Recorrido 5" width="525" height="546" />
                    <div className="text">
                        <h3> Recorrido de Experiencia Final </h3>
                        <p> Este recorrido culmina la visita llevando a los participantes a un área ambientada especialmente para recrear una experiencia memorable. Incluye espacios temáticos, zonas participativas y un cierre diseñado para dejar una impresión duradera sobre todo lo visto durante la visita.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}