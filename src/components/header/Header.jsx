import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/Saleh.jpg";
import ParticlesBg from "particles-bg";

export default function Header() {
  return (
    <section id="header">
      <ParticlesBg
        num={window.innerWidth > 900 ? 50 : 20}
        type="cobweb"
        bg={true}
        color="#ffffff"
      />

      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Muhammad Saleh Ajam</h1>
          <h5 className="text-light">Informatics Engineer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="Saleh" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </section>
  );
}
