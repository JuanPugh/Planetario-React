import "../CSS/nosotros.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Nosotros() {
    return (
        <div className="container-element">
            <Header />
            <div className="container-nosotros">
            <div className="content">
                <h2>EL PLANETARIO LPC</h2>

                <p>Somos Juan Pugh y Joaquín Carrasco, y juntos fundamos el Planetario Astronómico "LPC" en la provincia de Córdoba, Argentina. Nuestra pasión por la astronomía y la ciencia nos llevó a crear este espacio, con el propósito de acercar el universo a las personas y brindar un lugar de aprendizaje y exploración científica.</p>
                
                <h3>Nuestro equipo</h3>

                <ul>
                    <li>
                        <p>Juan Pugh: Director del planetario, con formación en física y astronomía. Coordina actividades y se enfoca en que el planetario sea accesible para todos.</p>
                    </li>
                    <li>
                        <p>Joaquín Carrasco: Comunicador científico, encargado de las actividades educativas y visitas guiadas, adaptando la divulgación para públicos de todas las edades.</p>
                    </li>
                </ul>
                <h3>Nuestra misión</h3>
                <p>Nos mueve el deseo de despertar el interés por la astronomía y la ciencia en la comunidad. Queremos que cada persona que nos visite sienta la misma curiosidad y asombro que nos llevó a iniciar este proyecto. Creemos que la ciencia y el conocimiento pueden transformar a las personas y que el planetario puede ser un lugar de encuentro y aprendizaje continuo.</p>
                <p>Hasta ahora, hemos recibido a miles de visitantes, y cada día buscamos mejorar y crecer. Estamos orgullosos de haber fundado "El Planetario LPC" y de compartir nuestra pasión por el cosmos con todos los que cruzan nuestras puertas.</p>
            </div>
        </div>
        <Footer />
        </div>
    );
}