import React from "react";
import { EDUCATION } from "./data";
import ServiceCard from "./ServiceCard/ServiceCard";
import { useRef } from "react";
import Slider from "react-slick";
import "./services.css";

function Services() {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight= () =>{
    sliderRef.current.slickNext()
  }
  const slideLeft= () =>{
    sliderRef.current.slickPrev()
  }

  return (
    <section className="experience-container" id="services" >
     <h5>//Information related to my Education</h5>
      <h2>&lt;Education <code>/&gt;</code></h2>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">next</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">prev</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {EDUCATION.map((item) => (
            <ServiceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Services;
