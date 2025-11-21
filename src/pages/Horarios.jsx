import "../CSS/horarios.css";
import Header from "../components/header";
import Footer from "../components/footer";


export default function Horarios() {
    return (
        <div className="container-element">
            <Header />
            <section className="container-horarios">
                <h2>HORARIOS DEL PLANETARIO</h2>
                <div className="tabla">
                    <div className="fila">
                        <div className="celda">Día</div>
                        <div className="celda">Hora</div>
                        <div className="celda">Recorrido</div>
                        <div className="celda">Duración</div>
                        <div className="celda">Descripcion</div>
                    </div>
                    <div className="fila">
                        <div className="celda">Lunes</div>
                        <div className="celda">16:00</div>
                        <div className="celda">Viaje a las Estrellas</div>
                        <div className="celda">60 min</div>
                        <div className="celda">
                            <p>Paseo guiado aprendiiendo acerca de las estrellas</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Lunes</div>
                        <div className="celda">10:00</div>
                        <div className="celda">Galaxias Vecinas</div>
                        <div className="celda">90 min</div>
                        <div className="celda">
                            <p>Recorrido explorando las galaxias que nos rodean</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Martes</div>
                        <div className="celda">18:00</div>
                        <div className="celda">El Sistema Solar</div>
                        <div className="celda">45 min</div>
                        <div className="celda">
                            <p>Aprendiendo acerca de nuestro hogar en el vasto universo</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Martes</div>
                        <div className="celda">12:00</div>
                        <div className="celda">Constelaciones</div>
                        <div className="celda">60 min</div>
                        <div className="celda">
                            <p>Recorrido de las estrellas que dibujan el cielo nocturno</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Miércoles</div>
                        <div className="celda">20:00</div>
                        <div className="celda">Agujeros negros</div>
                        <div className="celda">90 min</div>
                        <div className="celda">
                            <p>Conociendo estas anomalias mas a profundidad</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Miércoles</div>
                        <div className="celda">14:00</div>
                        <div className="celda">Astronomia</div>
                        <div className="celda">45 min</div>
                        <div className="celda">
                            <p>Descubre como funciona el universo</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Jueves</div>
                        <div className="celda">17:00</div>
                        <div className="celda">Los Secretos del Universo</div>
                        <div className="celda">50 min</div>
                        <div className="celda">
                            <p>El oscuro universo y sus secretos mas profundos</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Jueves</div>
                        <div className="celda">10:00</div>
                        <div className="celda">Big Bang</div>
                        <div className="celda">120 min</div>
                        <div className="celda">
                            <p>Como empezo todo, nuestros inicios</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Viernes</div>
                        <div className="celda">10:00</div>
                        <div className="celda">Nebulas</div>
                        <div className="celda">90 min</div>
                        <div className="celda">
                            <p>Las nubes del espacio</p>
                        </div>
                    </div>
                    <div className="fila">
                        <div className="celda">Viernes</div>
                        <div className="celda">13:00</div>
                        <div className="celda">Recorrido completo</div>
                        <div className="celda">600 min</div>
                        <div className="celda">
                            <p>Recorrido resumido por todo el establecimiento</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}