import "../CSS/solar_system.css";
import Planet from "../components/planet";

function showinfo(element) {
    const info = element.querySelector('.info')
    const rect = element.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    // Detectar si el planeta está cerca del borde derecho
    // Sumo 400 de offset asi tambien se aplica el efecto en jupiter
    if (rect.right + info.offsetWidth + 400 > windowWidth) {

        // Posiciona la infomracion a la izquierda
        info.style.left = "auto"; //Sin esto no funciona
        info.style.right = '120%';
    } else {
        //Posicion la informacion a la derecha
        info.style.right = "auto"; //Sin esto no funciona
        info.style.left = '120%';
    }
}

export default function SolarSystem() {

    return (
        <div className="system-solar">
            <div className="title"> <h1>SISTEMA SOLAR</h1> </div>


            <div className="container-planet">
                <div className="sun" onMouseOver={(e) => showinfo(e.currentTarget)}>
                    <div className="info">
                        <h2>Sol</h2>
                        <p>El Sol es una estrella de tipo G2V compuesta principalmente por hidrógeno
                            y helio, que genera energía mediante fusión nuclear. Tiene un diámetro
                            de 1.4 millones de km, una temperatura superficial de 5,500 °C
                            y una masa que constituye el 99.86% del sistema solar.
                            Su edad es de aproximadamente 4.6 mil millones de años
                            y se encuentra en la fase estable de su ciclo vital.</p>
                    </div>
                </div>

                <Planet name="Mercury" description="Es el planeta más cercano al Sol y el más pequeño del Sistema Solar.
                            Tiene temperaturas extremas debido a su delgada atmósfera y la cercanía al Sol: muy caliente de día y extremadamente frío de noche.
                            Carece de lunas."></Planet>


                <div className="planet venus" onMouseOver={(e) => showinfo(e.currentTarget)}>
                    <div className="venus-atmosphere"></div>
                    <div className="info">
                        <h2>Venus</h2>
                        <p>Similar en tamaño y composición a la Tierra, pero con una atmósfera densa y tóxica que atrapa el calor.
                            Es el planeta más caliente, con temperaturas superiores a los 460 °C.
                            Gira en sentido opuesto al resto de los planetas (rotación retrógrada).</p>
                    </div>
                </div>

                <div className="planet earth" onMouseOver={(e) => showinfo(e.currentTarget)}>
                    <div className="earth-atmosphere"></div>
                    <div className="info">
                        <h2>Tierra</h2>
                        <p>La Tierra es un planeta rocoso con un diámetro de 12,742 km,
                            compuesto principalmente de hierro, oxígeno y silicio.
                            Su atmósfera, rica en nitrógeno y oxígeno, permite la vida
                            y regula el clima. Tiene agua en un 71% de su superficie,
                            con océanos, mares y ríos, y su núcleo está formado por hierro.</p>
                    </div>
                </div>

                <div className="planet mars" onMouseOver={(e) => showinfo(e.currentTarget)}>
                    <div className="info">
                        <h2>Marte</h2>
                        <p>Marte es un planeta rocoso con atmósfera de dióxido de carbono,
                            temperaturas frías y superficie roja. Tiene montañas, valles
                            y el volcán más grande del sistema solar. Sus dos lunas son Fobos y Deimos,
                            y posee agua en forma de hielo en los polos.</p>
                    </div>
                </div>

                <div className="planet jupiter" onMouseOver={(e) => showinfo(e.currentTarget)}>
                    <div className="info">
                        <h2>Júpiter</h2>
                        <p>Es el planeta más grande del Sistema Solar, compuesto principalmente de gas.
                            Tiene una famosa Gran Mancha Roja, una tormenta gigantesca que ha durado siglos.
                            Posee más de 75 lunas, siendo las más conocidas Ío, Europa, Ganímedes y Calisto.</p>
                    </div>
                </div>

                <div className="planet saturn" onMouseOver={(e) => showinfo(e.currentTarget)}>
                    <div className="info">
                        <h2>Saturno</h2>
                        <p>Saturno es un gigante gaseoso conocido por sus impresionantes anillos
                            compuestos de hielo y roca. Tiene un diámetro de 120,536 km y una atmósfera de hidrógeno y helio.
                            Posee al menos 83 lunas, siendo Titán la más grande, y su densidad es tan baja que podría flotar en agua.</p>
                    </div>
                </div>

                <div className="planet uranus" onMouseOver={(e) => showinfo(e.currentTarget)}>
                    <div className="info">
                        <h2>Urano</h2>
                        <p>Urano es un gigante helado con una atmósfera de hidrógeno,
                            helio y metano. Tiene un color azul verdoso debido al metano
                            y gira de lado, con un eje de inclinación extremo.
                            Su diámetro es de 50,724 km, y posee 27 lunas conocidas y anillos débiles.</p>
                    </div>
                </div>

                <div className="planet neptune" onMouseOver={(e) => showinfo(e.currentTarget)}>
                    <div className="info">
                        <h2>Neptuno</h2>
                        <p>Es el planeta más alejado del Sol y tiene una atmósfera muy activa con vientos extremadamente fuertes.
                            De color azul profundo debido al metano en su atmósfera.
                            Tiene 14 lunas, siendo la mayor Tritón, que orbita en dirección opuesta a la rotación de Neptuno.</p>
                    </div>
                </div>

            </div>
        </div >
    );
}