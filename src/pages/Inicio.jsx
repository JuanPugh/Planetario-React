import "../css/inicio.css"

const Inicio = () => {
    return (
        <div>
            <div class="container-element">

                <header>

                    <div class="container-title-logo">
                            <h1>LPC PLANETARIO</h1>
                    </div>

                    <nav>

                        <div class="container-card">
                            <a href="index.html" class="card">
                                <span class="back-face">Inicio</span>

                            </a>
                        </div>

                        <div class="container-card">
                            <a href="solar_system.html" class="card">
                                <span class="back-face">Aprender</span>
                            </a>
                        </div>

                        <div class="container-card">
                            <a href="nosotros.html" class="card">
                                <span class="back-face">Nosotros</span>
                            </a>
                        </div>

                        <div class="container-card">
                            <a href="login.html" class="card">
                                <span class="back-face">Login</span>
                            </a>
                        </div>


                    </nav>

                </header>

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
                    <a href="solar_system.html" class="educacion cont">
                        <h2>Aprende acerca de nuestro hogar</h2>
                        <p>Espacio educativo &RightArrow;</p>
                    </a>
                    <a href="productos.html" class="productos cont">
                        <h2>Productos</h2>
                        <p>Nuevas emociones &#128230;</p>
                    </a>
                    <a href="#" class="novedades cont">
                        <h2>Novedades</h2>
                        <p>Enterate de lo mas reciente &#9668;</p>
                    </a>
                </section>

                <footer>

                    <nav>

                        <div class="location box">
                            <a href="https://www.google.com/maps/dir//Lanín+2020,+Q8300+Neuquén/@-38.9648456,-68.1290172,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x960a33b795c819a7:0x65c00b69eb2c3f1d!2m2!1d-68.0877317!2d-38.9648529?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">Donde encontrarnos</a>
                        </div>

                        <div class="number box">
                            <a href="tel:+02994478052">0299 447-8052</a>
                        </div>

                        <div class="school-page box">
                            <a href="https://epet20.edu.ar">Nuestra Escuela</a>
                        </div>

                        <div class="facebook-page box">
                            <a href="https://www.facebook.com/EPET20">Facebook</a>
                        </div>

                        <div class="instagram-page box">
                            <a href="https://www.instagram.com/epet20educacion/">Instagram</a>
                        </div>

                        <div class="twitter-page box">
                            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fepet20educacion">Twitter</a>
                        </div>


                    </nav>

                    <p> &#169;Copyright by LPC Planetario</p>

                </footer>

            </div>
        </div>
    );
}

export default Inicio;