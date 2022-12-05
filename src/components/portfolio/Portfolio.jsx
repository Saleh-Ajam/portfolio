import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Fourth Year Project.png";
import IMG2 from "../../assets/Graduation Project.png";
import IMG3 from "../../assets/Natoural Tours.png";

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
          {/* <a href="#" className="btn" target="_blank">
            Source Code
          </a> */}
          <a
            href="https://drive.google.com/drive/folders/1n2WUNHhSPzA46r13EokgV3l-_ffsWfjn?usp=sharing"
            className="btn"
            target="_blank"
          >
            Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__img">
            <img src={IMG2} alt="Fourth year project" />
          </div>
          <h3>Rubik's Cube Robot</h3>
          {/* <a href="#" className="btn" target="_blank">
            Source Code
          </a> */}
          <a
            href="https://drive.google.com/drive/folders/1mTlUH05gslJsfIDvTllP6i20zRZuaNEL"
            className="btn"
            target="_blank"
          >
            Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__img">
            <img src={IMG3} alt="Fourth year project" />
          </div>
          <h3>Natural Tours</h3>
          <a
            href="https://documenter.getpostman.com/view/7259292/U16nKj1C"
            className="btn"
            target="_blank"
          >
            API Doc.
          </a>
          <a
            href="https://natural-tours.onrender.com/"
            className="btn"
            target="_blank"
          >
            Demo
          </a>
          <a
            href="https://github.com/Saleh-Ajam/natural-tours"
            className="btn"
            target="_blank"
          >
            Source Code
          </a>
        </article>
      </div>
    </section>
  );
}
