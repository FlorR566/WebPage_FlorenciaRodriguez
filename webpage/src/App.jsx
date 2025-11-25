import ShapesBackground from './components/ShapesBackground';
import Hero from './components/Hero';

export default function App() {
  return (
    <>
      <header>
        <nav>
          <div id="inicio" className="logo">
            <a href="#hero">Florencia Rodriguez 🌸🐝</a>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}

      <section id="hero" className="hero">
        <Hero />

        {/* SVG DE FONDO */}
        <ShapesBackground />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <h2>Sobre mí</h2>
        <p>
          Estudio la Tecnicatura Universitaria en Programación en la UTN,
          <br />
          actualmente desarrollo proyectos personales en React, además de haber
          aprendido html, css,
          <br />
          Javascript y Python en cursos de manera autodidacta.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects">
        <h2>Proyectos</h2>
        <div className="project-grid">
          <div className="project-card">
            <a
              className="project-a"
              href="https://florr566.github.io/RandomUser-Grapher/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>RandomUser Explorer</h3>
              <p>
                Herramienta para obtener datos de usuarios random, mediante una
                API. Incluye un gráfico que muestra la cantidad de mujeres y
                hombres.
              </p>

              <img
                src="/src/random-user-explorer-lightMode.png"
                alt="random-user-explorer-lightMode"
                width="180"
                height="150"
              />
              <img
                src="/src/random-user-explorer-darkMode.png"
                alt="random-user-explorer-darkMode"
                width="150"
                height="150"
              />
            </a>
          </div>

          <div className="project-card">
            <a
              className="project-a"
              href="https://florr566.github.io/Weather-App-FR/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Weather App</h3>
              <p>
                Aplicación para consultar el clima en tiempo real: temperatura,
                humedad y más, consumiendo una API externa.
              </p>
              <img
                src="/src/weather-app.png"
                alt="Weather-app"
                width="270"
                height="150"
              />
            </a>
          </div>

          <div className="project-card">
            <a
              className="project-a"
              href="https://florr566.github.io/TO-DO-List/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>To-Do List</h3>
              <p>
                Aplicación interactiva para gestionar tareas, con almacenamiento
                local, desarrollada en JavaScript, CSS y HTML.
              </p>

              <img
                src="/src/to-do-list.png"
                alt="To-do-list"
                width="270"
                height="150"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <div className="div-icons">
          <a
            href="https://www.linkedin.com/in/florenciamabelrodriguez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-linkedin"
              src="/src/linkedIn-icon.svg"
              alt="LinkedIn Icon"
              width="40"
              height="40"
            />
          </a>

          <a
            href="https://github.com/FlorR566"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-github"
              src="/src/github-icon.svg"
              alt="GitHub Icon"
              width="34"
              height="34"
            />
          </a>
        </div>

        <p>
          O a través de un correo a{' '}
          <a
            href="mailto:florodriguez.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            florodriguez.dev@gmail.com
          </a>
        </p>
      </section>

      <footer>
        <p>&copy; 2025 creado con 💜 por Florencia Rodriguez</p>
      </footer>
    </>
  );
}
