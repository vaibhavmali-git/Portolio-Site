import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar2.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviewData = [
  {
    avatar: AVTR1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec sem posuere gravida.",
  },
  {
    avatar: AVTR1,
    name: "Jane Smith",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },

  {
    avatar: AVTR1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec sem posuere gravida.",
  },
  {
    avatar: AVTR1,
    name: "Jane Smith",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {reviewData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
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

export default Testimonials;
