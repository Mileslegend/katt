import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import { testimonial } from "../../data";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="testimonial">
      <div className="container">
        <h1 className="title">
          Clients <span className="g-text">Testimonies</span>
        </h1>
        <h3 className="sub__title text__muted">
          Join us and let the magic of our services transform your journey into
          an unforgettable odyssey. Feel free to see what our clients talk about us and we kindly request for your review
          
        </h3>
        <Slider {...settings} className="clients__container">
          {testimonial.map((list, index) => (
            <React.Fragment key={index}>
              <div className="star__container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text__muted content">{list.review}</p>
              <div className="user__row">
                <div className="profile">
                  <img src={list.image} alt={list.name} />
                </div>
                <div className="details">
                  <h3 className="name">{list.name}</h3>
                  <small>Satisfied | Client</small>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Slider>
        
        
      </div>
      <a
          href="https://g.page/r/CZdmDo3DwppWEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn__primary review-link"
        >
          Write a Review
        </a>
    </section>
  );
};

export default Testimonial;
