import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import AVTR5 from "../../assets/avatar5.jpg";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="M. Dayie" />
            <h5 className="client__name">Muhammad Dayie</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, alias. Illo, ad rem dolore animi doloremque facilis
              culpa repudiandae consequuntur veritatis distinctio! Pariatur
              voluptatibus magnam nobis. Possimus dolorem illo sed!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Ahmad Barakeh" />
            <h5 className="client__name">Ahmad Barakeh</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, alias. Illo, ad rem dolore animi doloremque facilis
              culpa repudiandae consequuntur veritatis distinctio! Pariatur
              voluptatibus magnam nobis. Possimus dolorem illo sed!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="M. Al-Elawie" />
            <h5 className="client__name">Muhammad Al-Elawie</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, alias. Illo, ad rem dolore animi doloremque facilis
              culpa repudiandae consequuntur veritatis distinctio! Pariatur
              voluptatibus magnam nobis. Possimus dolorem illo sed!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Hasan Hajar" />
            <h5 className="client__name">Hasan Hajar</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, alias. Illo, ad rem dolore animi doloremque facilis
              culpa repudiandae consequuntur veritatis distinctio! Pariatur
              voluptatibus magnam nobis. Possimus dolorem illo sed!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR5} alt="Abulhalim" />
            <h5 className="client__name">Abulhalim Kherallah</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, alias. Illo, ad rem dolore animi doloremque facilis
              culpa repudiandae consequuntur veritatis distinctio! Pariatur
              voluptatibus magnam nobis. Possimus dolorem illo sed!
            </small>
          </div>
        </article>
      </div>
    </section>
  );
}
