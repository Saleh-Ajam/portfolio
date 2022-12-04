import React from "react";
import "./about.css";
import ME from "../../assets/Saleh.jpg";
import { MdWorkOutline } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";

export default function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="Saleh About Img" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Experience</h5>
              <small>Junior Developer</small>
            </article>
            <article className="about__card">
              <RiBook2Line className="about__icon" />
              <h5>Education</h5>
              <small>B.Sc. Degree</small>
            </article>
            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Projects</h5>
              <small>4</small>
            </article>
          </div>
          <p>
            My name is Muhammad Saleh Ajam, and I have a Bachelor of Science
            Degree in Informatics Engineering. I have been awarded Al-Bassel
            Prize for being one of the top students at university. I love coding
            and pick up colors for my designs. My favotite drink is black
            coffee, and Elon Musk is my favorite celebrity.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
