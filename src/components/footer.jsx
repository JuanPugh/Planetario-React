import "../CSS/footer.css";
export default function Footer() {

    return (
        <footer>

            <nav>

                <div className="location box">
                    <img src="src/assets/png/location.png" alt="image location" title="image location" className="image" />
                    <a href="https://www.google.com/maps/dir//Lanín+2020,+Q8300+Neuquén/@-38.9648456,-68.1290172,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x960a33b795c819a7:0x65c00b69eb2c3f1d!2m2!1d-68.0877317!2d-38.9648529?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">Donde encontrarnos</a>
                </div>

                <div className="number box">
                    <img src="src/assets/png/telephone.png" alt="image telephone" title="image telephone" className="image" />
                    <a href="tel:+02994478052">0299 447-8052</a>
                </div>

                <div className="school-page box">
                    <img src="src/assets/png/logoescuela.png" alt="image escuela" title="image escuela" className="image" />
                    <a href="https://epet20.edu.ar">Nuestra Escuela</a>
                </div>

                <div className="facebook-page box">
                    <img src="src/assets/png/facebook.png" alt="facebook image" title="facebook image" className="image" />
                    <a href="https://www.facebook.com/EPET20">Facebook</a>
                </div>

                <div className="instagram-page box">
                    <img src="src/assets/png/instagram.png" alt="image instagram" title="image instagram" className="image" />
                    <a href="https://www.instagram.com/epet20educacion/">Instagram</a>
                </div>

                <div className="twitter-page box">
                    <img src="src/assets/png/twitter.png" alt="image twitter" title="image twitter" className="image" />
                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Fepet20educacion">Twitter</a>
                </div>


            </nav>

            <p> &#169;Copyright by LPC Planetario</p>

        </footer>
    );
}