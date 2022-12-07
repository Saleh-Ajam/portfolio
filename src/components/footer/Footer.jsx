import React from "react";
import "./footer.css";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import logo from "../../assets/logo.png";

import {} from "react-icons/bs";
export default function Footer() {
  return (
    <section id="footer" className="container__sky__background">
      <footer>
        <div className="footer__logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <a>
            <small>M. Saleh Ajam</small>
          </a>
        </div>
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

        <div className="footer__socials">
          <a href="https://twitter.com/saleh_ref">
            <BsTwitter />
          </a>
          <a href="https://github.com/Saleh-Ajam">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-saleh-ajam-1487b8145/">
            <IoLogoLinkedin />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Muhammad Saleh Ajam. All rights are reserved.</small>
        </div>
        <div>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </footer>
    </section>
  );
}
