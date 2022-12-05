import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import AVTR5 from "../../assets/avatar5.jpg";

import { Navigation, Pagination, Autoplay, EffectCards } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "Muhammad Dayie",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa esse, sequi enim facere illum, recusandae illo quo iusto commodi dolores, ex minus. Facere delectus officia sit quod sed, eaque numquam.",
  },
  {
    avatar: AVTR2,
    name: "Ahmad Barakeh",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa esse, sequi enim facere illum, recusandae illo quo iusto commodi dolores, ex minus. Facere delectus officia sit quod sed, eaque numquam.",
  },
  {
    avatar: AVTR3,
    name: "Muhammad Al-Elawie",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa esse, sequi enim facere illum, recusandae illo quo iusto commodi dolores, ex minus. Facere delectus officia sit quod sed, eaque numquam.",
  },
  {
    avatar: AVTR4,
    name: "Hasan Hajar",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa esse, sequi enim facere illum, recusandae illo quo iusto commodi dolores, ex minus. Facere delectus officia sit quod sed, eaque numquam.",
  },
  {
    avatar: AVTR5,
    name: "Abulhalim Kherallah",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa esse, sequi enim facere illum, recusandae illo quo iusto commodi dolores, ex minus. Facere delectus officia sit quod sed, eaque numquam.",
  },
];
export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Autoplay, EffectCards]}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        rewind={true}
        speed={1200}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
