import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

export default function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>Prototypes using figma.</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>Personas.</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>Mockups.</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>User journey.</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>Wireframes.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Frontend Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>Html</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>CSS</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>ReactJS</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>Responsive pages.</p>
            </li>
          </ul>
        </article>
        {/* End of Frontend Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Bckend Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>NodeJS.</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>API.</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>Dynamic Rendering.</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>DataBase.</p>
            </li>
            <li>
              <BsCheckLg className="service__list__icon" />
              <p>Professional Authentication.</p>
            </li>
          </ul>
        </article>
        {/* End of Backend Web Develompent*/}
      </div>
    </section>
  );
}
