import React, { useRef } from "react";
import "./Footer.css";
import { footer } from "../../data";
import { Link } from "react-scroll";
import Logo from "../Logo";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_wljedhu", "template_qkvpq7k", e.target, {
        publicKey: "5y582uX0EBJrUO9q5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset(); // Reset the form fields after successful submission
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const handleSubscribe = (e) => {
    sendEmail(e);
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          {footer.map((list, index) => (
            <div className="column" key={index}>
              <h3 className="routes__name">{list.name}</h3>
              <div className="routes__container">
                {list.routes.map((route, i) => (
                  <Link to={route.id || "#"} key={i} className="route__item">
                    <p className="name">{route.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="column">
            <Logo />
            <div className="newsletter">
              <h3>Get timely updates</h3>
              <form ref={form} onSubmit={sendEmail} className="control__container">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="control"
                />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <h3>Copyright © All rights reserved | 2024</h3>
          <p className="text__muted">Built with love by Muhuan Developers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;