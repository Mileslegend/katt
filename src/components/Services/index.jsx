import React from "react";
import "./Services.css";
import { services } from "../../data";
import { Link } from 'react-scroll';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h1 className="title">
          Our <span className="g-text">Services</span>
        </h1>
        <h3 className="sub__title text__muted">
          Join us and let the magic of our services transform your journey into
          an unforgettable odyssey. Our seasoned guides will escort you through
          the untamed wilderness with unrivaled expertise and genuine concern
          for your well-being. From the instant you step into the realm of
          adventure with us, a world of boundless hospitality awaits. Trust in
          KatsMo Safaris to awaken your spirit of exploration and guide you
          towards extraordinary discoveries in the heart of nature.
        </h3>
        <div className="services__container">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <div className="picture">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="details">
                <h3>{service.name}</h3>
                <p className="text__muted description">{service.description}</p>
              </div>
              <div className="buttons__container">
                <button className="btn">Read More</button>
                <Link to='contact' smooth={true} className='btn btn__primary'>Get Started</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;