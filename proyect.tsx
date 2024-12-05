import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pagina.css"; // tu archivo CSS

const App: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>("home");
  const [introFinished, setIntroFinished] = useState<boolean>(false);

  const changeContent = (content: string) => {
    setActiveContent(content);
  };

  useEffect(() => {
    // Iniciar animación de deslizamiento cuando el componente se carga
    setTimeout(() => {
      setIntroFinished(true); // La animación de intro ha terminado
    }, 1000); // Espera 1 segundo para que termine la animación
  }, []);

  return (
    <div style={{ backgroundColor: "bisque", fontFamily: "Arial, sans-serif" }}>
      {/* Pantalla de bienvenida */}
      <div id="intro-screen" className={introFinished ? "slide-out" : ""}>
        <h1>¡Bienvenido a Mi Página en REACT!</h1>
      </div>

      {/* Contenido principal */}
      <div id="main-content" className={introFinished ? "show" : ""}>
        {/* Barra de navegación */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="#"
              onClick={() => changeContent("home")}
            >
              Home
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeContent === "home" ? "active" : ""
                    }`}
                    href="javascript:void(0)"
                    onClick={() => changeContent("home")}
                  >
                    1er parcial
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeContent === "regalos" ? "active" : ""
                    }`}
                    href="javascript:void(0)"
                    onClick={() => changeContent("regalos")}
                  >
                    2do parcial
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeContent === "fecha" ? "active" : ""
                    }`}
                    href="javascript:void(0)"
                    onClick={() => changeContent("fecha")}
                  >
                    3er parcial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Contenido dinámico */}
        <div className="container mt-5">
          {/* Página principal */}
          {activeContent === "home" && (
            <div id="home" className="content">
              <h3>Bienvenido a la Página Principal </h3>
              <h4> 2do parcial</h4>
              <p>
                esta es la seccion en la que pone cuales fueron algunos de los
                ejercicios del 1er parcial y pues como fue fue algo sencillo en
                si solo fue algo de botones y alertas y todo eso osea solo fue
                algo sencillo para empezar con las bases de esto, un claro
                ejemplo de este parciales fueron los inputs
              </p>
              <h1>HTML INPUTS</h1>
              <h2>Omar Alejandro</h2>

              <input type="text" placeholder="Texto" />
              <input type="password" placeholder="Contraseña" />
              <input type="button" value="Botón" />
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Aceptar términos</label>
              <input type="color" />
              <input type="date" />
              <input type="time" />
            </div>
          )}

          {/* Sección Regalos */}
          {activeContent === "regalos" && (
            <div id="regalos" className="content">
              <h3>2do parcial</h3>
              <p>
                en este parcial fue algo sencillo por el echo en el que fue solo
                algunos problemas de matematicas osea fue lo que mas se me pego
                en si por que usamos lo que ya sabiamos que eran los inputs y
                los utilizamos en eso.
              </p>
            </div>
          )}

          {/* Sección Fecha */}
          {activeContent === "fecha" && (
            <div id="fecha" className="content">
              <h3>carousel</h3>
              <h2>Un carrusel </h2> de fotos (o image carousel en inglés) es un
              componente interactivo que permite mostrar una serie de imágenes o
              contenido de forma deslizante o rotativa, generalmente dentro de
              un espacio limitado en la pantalla. Los carruseles son populares
              en páginas web y aplicaciones móviles, y se utilizan para
              presentar varias imágenes o elementos sin ocupar mucho espacio en
              la interfaz de usuario. <br /> <br />
              <h4> caracteristicas</h4>
              <br />
              Deslizamiento automático: Las imágenes se deslizan automáticamente
              después de un intervalo de tiempo determinado, pero también se
              puede permitir que el usuario navegue manualmente entre las
              imágenes. <br />
              Controles de navegación: El carrusel suele incluir botones de
              navegación, como flechas (izquierda/derecha), puntos o miniaturas,
              que permiten a los usuarios avanzar o retroceder entre las
              imágenes. <br />
              Transiciones suaves: Las imágenes se muestran con transiciones
              suaves, como desvanecimientos o deslizamientos, lo que mejora la
              experiencia visual del usuario. <br />
              Responsivo: Al igual que otros elementos de diseño web modernos,
              los carruseles son generalmente adaptativos, es decir, se ajustan
              al tamaño de la pantalla (por ejemplo, en dispositivos móviles o
              pantallas de escritorio). <br />
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
          <section className="d-flex justify-content-center justify-content-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>
                Esta es la página que estaré haciendo en este como proyecto osea
                que se veria bastante chido por el proposito que lo que es de
                cambiar el idioma de programacion de html a react(tsx). <br />{" "}
                <br />
              </span>
            </div>
            <div style={{ margin: "0 auto" }}>
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002"></path>
              </svg>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default App;




