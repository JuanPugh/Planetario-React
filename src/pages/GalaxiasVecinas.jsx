import "../CSS/galaxias_vecinas.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function GalaxiasVecinas() {
    return (
        <div className="container-element">
            <Header />
            <section className="container-galaxias">
                <div className="title">
                    <h2>LAS 5 GALAXIAS MAS CERCANAS</h2>
                </div>

                <div className="content-galaxia galaxia-can">
                    <img src="src/assets/Galaxias/galaxiacan.jpg" alt="galaxiacan" title="Galaxia Can Mayor" width="640" height="320" />
                    <div className="text">
                        <h3> Galaxia enana del Can Mayor </h3>
                        <p> Esta es una galaxia enana irregular, situada en la constelación Canis Mayor. La relativamente pequeña galaxia se cree que contiene unos mil millones de estrellas en total. La Galaxia Enana de Canis Mayor, por el momento, se cree que es la vecina más cercana a nuestra ubicación en la Vía Láctea. Se encuentra a unos 25.000 años luz de distancia del Sistema Solar y a 42.000 años luz del Centro Galáctico, es decir del centro de rotación de nuestra galaxia. Tiene una forma prácticamente elíptica y se cree que contiene un número mayor de estrellas que la galaxia Enana Elíptica de Sagitario, la que hasta hace poco era la candidata a galaxia más cercana a nosotros.</p>
                    </div>
                </div>

                <div className="content-galaxia galaxia-eliptica">
                    <div className="text">
                        <h3> Galaxia Eliptica de Sagitario </h3>
                        <p> Esta es una galaxia satélite de nuestra propia galaxia, que tiene forma de bucle elíptico. Se compone de cuatro cúmulos globulares, cuyo grupo principal se descubrió en 1994. De aproximadamente 10.000 años luz de diámetro, está actualmente a unos 70.000 años luz de la Tierra, viajando en una órbita polar (es decir, una órbita que pasa sobre el polos galácticos de la Vía Láctea) a una distancia de unos 50.000 años luz desde el núcleo de ésta (aproximadamente 1/3 de la distancia de la Gran Nube de Magallanes). Verla resulta una tarea ardua, ya que está situada en un punto opuesto al sistema solar, tomando como partida el centro galáctico.</p>
                    </div>
                    <img src="src/assets/Galaxias/galaxiaeliptica.jpg" alt="galaxiaeliptica" title="Galaxia Eliptica de Sagitario" width="1920" height="1080" />
                </div>

                <div className="content-galaxia galaxia-magallanes">
                    <img src="src/assets/Galaxias/galaxiamagallanes.jpg" alt="galaxiamagallanes" title="La Gran Nube de Magallanes" width="660" height="330" />
                    <div className="text">
                        <h3> La Gran Nube de Magallanes </h3>
                        <p> Esta es una galaxia cercana, y una galaxia satélite de la Vía Láctea. A una distancia de 42,7 kiloparsecs (163.000 años luz), lo que convierte a la Gran Nube de Magallanes en la tercera galaxia más cercana a la Vía Láctea. Tiene un diámetro de unos 35.000 años luz y una masa, aproximadamente, 30 mil millones de veces la masa solar, por lo que equivaldría más o menos 1/10 parte de la masa de la Vía Láctea. Es también la cuarta galaxia más grande del Grupo local, después de la galaxia de Andrómeda, la Vía Láctea y la galaxia del Triángulo. En el pasado, fue a menudo considerada como un tipo de galaxia irregular. Sin embargo, ahora se ha reconocido como una galaxia espiral barrada. Su aspecto irregular es probablemente el resultado de las interacciones de marea con la vía láctea y la Pequeña Nube de Magallanes. Es visible como una «nube» débil en el cielo nocturno del hemisferio sur en la frontera entre las constelaciones de Dorado y Mensa. </p>
                    </div>
                </div>

                <div className="content-galaxia galaxia-bootes">
                    <div className="text">
                        <h3> Galaxia enana de Boötes </h3>
                        <p> Esta galaxia enana de tipo esférica fue descubierta gracias al espectroscopio de alta gama ubicado en Nuevo México, el Sloan Digital Sky Survey. Corría el año 2007. La galaxia, localizada en la constelación de Boötes, es bastante tenue. Tiene una magnitud visual aparente de 13,1 y una magnitud absoluta de -5,8. Su luminosidad es apenas 100.000 veces la del Sol. Es una de las galaxias menos luminosas jamás descubiertas. Sus estrellas están bastante esparcidas unas de otras y parecen estrellas en un cúmulo globular muy antiguo, lo que sugiere que la galaxia en sí es bastante vetusta. </p>
                    </div>
                    <img src="src/assets/Galaxias/galaxiabootes.jpg" alt="galaxiabootes" title="Galaxia enana de Boötes" width="1370" height="768" />
                </div>

                <div className="content-galaxia galaxia-magallanespeque">
                    <img src="src/assets/Galaxias/galaxiamagallanespeque.jpg" alt="galaxiamagallanespeque" title="Pequeña Nube de Magallanes" width="525" height="546" />
                    <div className="text">
                        <h3> Pequeña Nube de Magallanes </h3>
                        <p> También conocida como Nebucula Menor, es una galaxia clasificada como una enana irregular. Tiene un diámetro de unos 7.000 años luz, contiene varios cientos de millones de estrellas, y tiene una masa total de aproximadamente de 7 mil millones de veces la masa del Sol. Contiene una estructura central y se especula que fue una vez una galaxia espiral barrada. También es uno de los objetos más lejanos que se pueden ver a simple vista. Con una declinación media de -73 grados aproximadamente, sólo puede ser vislumbrada desde el hemisferio sur y las latitudes más bajas del hemisferio norte. Se encuentra sobre todo en la constelación de Tucana y también, en parte, en Hydrus. Aparece como una mancha borrosa, con el aspecto de una pieza separada de la Vía Láctea. Ya que tiene un brillo superficial muy bajo, lo mejor es observarla desde un sitio oscuro y lejos de las luces de la ciudad. Forma pareja con la Gran Nube de Magallanes, que se encuentra 20 grados más al este. </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}