import React from "react";
import "./footer.css";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

import {} from "react-icons/bs";
export default function Footer() {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">
          M. Saleh Ajam
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://twitter.com/saleh_ref">
            <BsTwitter />
          </a>
          <a href="https://github.com/Saleh-Ajam">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-saleh-ajam-1487b8145/">
            <MdAlternateEmail />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Muhammad Saleh Ajam. All rights reversed.</small>
        </div>
      </footer>
    </section>
  );
}
