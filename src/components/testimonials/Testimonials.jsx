import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import AVTR5 from "../../assets/avatar5.jpg";
import AVTR6 from "../../assets/avatar6.jpg";
import AVTR7 from "../../assets/avatar7.jpg";

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
    review: "May God give you wellness eng. Saleh, neat job.",
  },
  {
    avatar: AVTR2,
    name: "Ahmad Barakeh",
    review:
      "Muhammad is a respectable person with people. The confident of himself and the one who gives everything his rights.    A smart person who knows what he's doing. Hopefully, your days will be all good and healthy.",
  },
  {
    avatar: AVTR3,
    name: "Muhammad Al-Elawie",
    review: "Nice job and good partner ",
  },
  {
    avatar: AVTR4,
    name: "Hasan Hajar",
    review:
      "A developer and programmer who is great in dealing and achieving and fulfills requests in a timely manner. He never slackens in his work. It was a wonderful experience working with him.",
  },
  {
    avatar: AVTR5,
    name: "Abulhalim Kherallah",
    review:
      "Hello everyone. I would like to talk to you about my friend Saleh. He is a diligent and diligent person who always strives to achieve the best. He has a strong will and determination to do things that serve those around him. Finally, I tell him to continue your hard work, as there is always someone waiting. your success❤️",
  },
  {
    avatar: AVTR6,
    name: "Mahmoud Ali",
    review:
      "Muhammad is an ambitious and vigorous engineer. I wish you a bright future.",
  },
  {
    avatar: AVTR7,
    name: "Muhammad Tarabishy",
    review:
      "He does a great job, participates, is very cooperative and professional in work and dealing, he finds tirelessly and is always aware of everything new and general in the field of work or activity of the site. All the best, Mr. Saleh. We will deal more in the coming days.",
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
