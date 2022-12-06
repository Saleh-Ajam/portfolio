import React from "react";
import "./contact.css";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAlternateEmail className="contact__option__icon" />
            <h4>E-mail</h4>
            <h5>salehajam0@gmail.com</h5>
            <a href="mailto:salehajam0@gmail.com">Send E-mail</a>
          </article>
          <article className="contact__option">
            <IoLogoLinkedin className="contact__option__icon" />
            <h4>Linked-in</h4>
            <h5>Muhammad Saleh Ajam</h5>
            <a
              href="https://www.linkedin.com/in/muhammad-saleh-ajam-1487b8145/"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <BsTwitter className="contact__option__icon" />
            <h4>Twitter</h4>
            <h5>@Saleh_ref</h5>
            <a href="https://twitter.com/Saleh_ref" target="_blank">
              Follow
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
