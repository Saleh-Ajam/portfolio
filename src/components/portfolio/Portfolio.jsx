import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Fourth Year Project.png";
import IMG2 from "../../assets/Graduation Project.png";
import IMG3 from "../../assets/Natoural Tours.png";
import IMG4 from "../../assets/Weather-Web-Page.png";
import IMG5 from "../../assets/Notebook.png";
import NOTEBOOKAPP from "../../assets/Notebook.apk";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item__img">
            <img src={IMG1} alt="Fourth year project" />
          </div>
          <h3>Easy Market Android Application</h3>
          <div className="portfolio__item__cta">
            {/* <a href="#" className="btn" target="_blank">
            Source Code
          </a> */}
            <a
              href="https://drive.google.com/drive/folders/1n2WUNHhSPzA46r13EokgV3l-_ffsWfjn?usp=sharing"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__img">
            <img src={IMG2} alt="Fourth year project" />
          </div>
          <h3>Rubik's Cube Robot</h3>
          <div className="portfolio__item__cta">
            {/* <a href="#" className="btn" target="_blank">
            Source Code
          </a> */}
            <a
              href="https://drive.google.com/drive/folders/1mTlUH05gslJsfIDvTllP6i20zRZuaNEL"
              className="btn btn-primary"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__img">
            <img src={IMG3} alt="Fourth year project" />
          </div>
          <h3>Natural Tours</h3>
          <div className="portfolio__item__cta">
            <a
              href="https://documenter.getpostman.com/view/7259292/U16nKj1C"
              className="btn"
              target="_blank"
            >
              API Doc.
            </a>
            <a
              href="https://github.com/Saleh-Ajam/natural-tours"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://natural-tours.onrender.com/"
              className="btn-primary btn"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__img">
            <img src={IMG4} alt="Natiural Tours" />
          </div>
          <h3>Weather Page</h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com/Saleh-Ajam/weather-web-page"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://saleh-ajam.github.io/weather-web-page/"
              className="btn-primary btn"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__img">
            <img src={IMG5} alt="Notebook App." />
          </div>
          <h3>Notebook Android App.</h3>
          <div className="portfolio__item__cta">
            <a href={NOTEBOOKAPP} className="btn btn-primary" download>
              download App.
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
