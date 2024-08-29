import React, { useRef, useState } from "react";
import "./Achievement.css";
import { FaAward, FaDiagramProject, FaUsersLine } from "react-icons/fa6";
import Odometer from "react-odometerjs";
import { GiTeamIdea } from "react-icons/gi";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Achievement = () => {
  const [clients, setClients] = useState(0);
  const [tours, setTours] = useState(0);
  const [teams, setTeams] = useState(0);
  const [recommendations, setRecommendations] = useState(0);

  const container = useRef(null);

  const updateData = () => {
    const timeout = setTimeout(() => {
      setClients(120);
      setTours(150);
      setTeams(44);
      setRecommendations(89);
    }, 500);

    return () => clearTimeout(timeout);
  };

  const resetData = () => {
    setClients(0);
    setTours(0);
    setTeams(0);
    setRecommendations(0);
  };

  useGSAP(() => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: container.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 4,
            onEnter: updateData,
            onLeaveBack: resetData,
        }
    });
    return  () => timeline.revert();
  }, {scope: container })

  return (
    <div className="achievement__container " ref={container} >
      <div className="container">
        {/* Start Achievement */}
        <div className="achievement">
          <div className="icon__container">
            <FaUsersLine />
          </div>
          <div className="details">
            <div className="row">
              <Odometer value={clients} className="title" />
              <h1 className="title">+</h1>
            </div>
            <small className="text__muted">Happy Clients</small>
          </div>
        </div>
        {/* End Achievement */}

        {/* Start Achievement */}
        <div className="achievement">
          <div className="icon__container">
            <FaDiagramProject />
          </div>
          <div className="details">
            <div className="row">
              <Odometer value={tours} className="title" />
              <h1 className="title">+</h1>
            </div>
            <small className="text__muted">Successful Tours</small>
          </div>
        </div>
        {/* End Achievement */}

        {/* Start Achievement */}
        <div className="achievement">
          <div className="icon__container">
            <GiTeamIdea />
          </div>
          <div className="details">
            <div className="row">
              <Odometer value={teams} className="title" />
              <h1 className="title">+</h1>
            </div>
            <small className="text__muted">Expert Workers</small>
          </div>
        </div>
        {/* End Achievement */}

        {/* Start Achievement */}
        <div className="achievement">
          <div className="icon__container">
            <FaAward />
          </div>
          <div className="details">
            <div className="row">
              <Odometer value={recommendations} className="title" />
              <h1 className="title">+</h1>
            </div>
            <small className="text__muted">Recommendations</small>
          </div>
        </div>
        {/* End Achievement */}
      </div>
    </div>
  );
};

export default Achievement;
