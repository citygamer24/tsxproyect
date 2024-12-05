<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página en HTML</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .content {
            display: none;
        }
        .content.show {
            display: block;
        }
        .navbar-nav .active {
            font-weight: bold;
        }
        #intro-screen {
            background-color: bisque;
            padding: 50px;
            text-align: center;
        }
        .slide-out {
            animation: slideOut 1s forwards;
        }
        @keyframes slideOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div id="intro-screen">
        <h1>¡Bienvenido a Mi Página en HTML!</h1>
    </div>

    <div id="main-content">
        <!-- Barra de navegación -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" onclick="changeContent('home')">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" onclick="changeContent('home')">1er parcial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" onclick="changeContent('regalos')">2do parcial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)" onclick="changeContent('fecha')">3er parcial</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Contenido dinámico -->
        <div class="container mt-5">
            <div id="home" class="content show">
                <h3>Bienvenido a la Página Principal </h3>
                <h4> 2do parcial</h4>
                <p>
                    Esta es la sección en la que pone algunos de los ejercicios del 1er parcial. Fue algo sencillo, solo botones y alertas.
                </p>
                <h1>HTML INPUTS</h1>
                <h2>Omar Alejandro</h2>

                <input type="text" placeholder="Texto" />
                <input type="password" placeholder="Contraseña" />
                <input type="button" value="Botón" />
                <input type="checkbox" id="checkbox" />
                <label for="checkbox">Aceptar términos</label>
                <input type="color" />
                <input type="date" />
                <input type="time" />
            </div>

            <div id="regalos" class="content">
                <h3>2do parcial</h3>
                <p>
                    En este parcial fue sencillo, ya que usamos los inputs que conocíamos para resolver problemas matemáticos.
                </p>
            </div>

            <div id="fecha" class="content">
                <h3>Carousel</h3>
                <h2>Un carrusel</h2>
                <p>
                    Un carrusel de fotos es un componente interactivo que permite mostrar una serie de imágenes de forma deslizante o rotativa.
                </p>
                <h4>Características</h4>
                <p>
                    Deslizamiento automático, controles de navegación, transiciones suaves, y responsivo.
                </p>
            </div>
        </div>
        
        <!-- Footer -->
        <footer class="text-center text-lg-start bg-body-tertiary text-muted">
            <section class="d-flex justify-content-center justify-content-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>
                        Esta es la página que estoy haciendo como proyecto, cambiando de HTML a React.
                    </span>
                </div>
                <div style="margin: 0 auto;">
                    <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.049C-.002 12.556 3.58 16.05 8 16.05c4.418 0 8-3.604 8-8.001z"></path>
                    </svg>
                </div>
            </section>
        </footer>
    </div>

    <script>
        let activeContent = 'home';
        let introFinished = false;

        // Función para cambiar contenido
        function changeContent(content) {
            document.querySelectorAll('.content').forEach(function (el) {
                el.classList.remove('show');
            });
            document.getElementById(content).classList.add('show');
        }

        // Simulando la animación de entrada
        setTimeout(function() {
            introFinished = true;
            document.getElementById('intro-screen').classList.add('slide-out');
            document.getElementById('main-content').style.display = 'block';
        }, 1000);  // Espera 1 segundo para que termine la animación
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
