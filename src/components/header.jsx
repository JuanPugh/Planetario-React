import "../CSS/header.css";
export default function Header() {

    return (
        <header>

            <div class="container-title-logo">
                <img src="src/assets/logo.png" alt="Logo de empresa" title="Planetario LPC" width="248" height="248" class="logo" />
                <h1>LPC PLANETARIO</h1>
            </div>

            <nav>

                <div class="container-card">
                    <a href="index.html" class="card">
                        <img src="src/assets/png/home.png" alt="Icono de Inicio" title="¡Ve al inicio!" width="512" height="512" class="front-face" />
                        <span class="back-face">Inicio</span>

                    </a>
                </div>

                <div class="container-card">
                    <a href="solar_system.html" class="card">
                        <img src="src/assets/png/book.png" alt="Icono de libro" title="¡Aprende sobre el sistema solar!" width="512" height="512" class="front-face" />
                        <span class="back-face">Aprender</span>
                    </a>
                </div>

                <div class="container-card">
                    <a href="login.html" class="card">
                        <img src="src/assets/png/login.png" alt="image_login" title="¡Inicia sesion en tu cuenta!" width="512" height="512" class="front-face" />
                        <span class="back-face">Login</span>
                    </a>
                </div>


            </nav>

        </header>
    );
}