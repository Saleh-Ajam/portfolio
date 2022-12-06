import React from "react";
import "./contact.css";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAlternateEmail />
            <h4>E-mail</h4>
            <h5>salehajam0@gmail.com</h5>
            <a href="mailto:salehajam0@gmail.com">Send E-mail</a>
          </article>
          <article className="contact__option">
            <IoLogoLinkedin />
            <h4>Linked-in</h4>
            <h5>Muhammad Saleh Ajam</h5>
            <a href="https://www.linkedin.com/in/muhammad-saleh-ajam-1487b8145/">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <BsGithub />
            <h4>Github</h4>
            <h5>Saleh-Ajam</h5>
            <a href="https://github.com/Saleh-Ajam">Send E-mail</a>
          </article>
        </div>
      </div>
    </section>
  );
}
