import React from 'react';
import './About.css';
import { company__photo } from '../../assets';
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id='about'>
        <div className="container">
            <div className="column company__photo">
                <img src={company__photo} alt="company photo" />
            </div>
            <div className="column">
                <h3 className="sub__title">
                    With 7+ Years Experience
                </h3>
                <h1 className='sub__title'>
                    Turning your <span className="g-text">adventures</span> into an experience for a lifetime
                </h1>
                <p className="text__muted description">
                Allow us to be your compass in the vast world of travel, leading you to discover the hidden gems and untamed wonders of Africa. Whether you desire thrilling wildlife encounters, soul-stirring landscapes, or cultural immersion, our expert team will craft a personalized safari that aligns perfectly with your desires.
                </p>
                {/* Start Group */}
                <div className="group">

                    {/* Start Row */}
                    <div className="row">
                        <div className="icon__container">
                            <FaCheck />
                        </div>
                        <div className="details">
                            <p className="text__muted">
                                Consultation
                            </p>
                            <h3>Free</h3>
                        </div>
                    </div>
                    {/* End row */}

                    {/* Start Row */}
                    <div className="row">
                        <div className="icon__container">
                            <FaCheck />
                        </div>
                        <div className="details">
                            <p className="text__muted">
                                Expert
                            </p>
                            <h3>Team</h3>
                        </div>
                    </div>
                    {/* End row */}

                    {/* Start Row */}
                    <div className="row">
                        <div className="icon__container">
                            <FaCheck />
                        </div>
                        <div className="details">
                            <p className="text__muted">
                                Client
                            </p>
                            <h3>Support</h3>
                        </div>
                    </div>
                    {/* End row */}

                    {/* Start Row */}
                    <div className="row">
                        <div className="icon__container">
                            <FaCheck />
                        </div>
                        <div className="details">
                            <p className="text__muted">
                                Quality
                            </p>
                            <h3>Services</h3>
                        </div>
                    </div>
                    {/* End row */}
                </div>
                {/* End Group */}

                <div className="buttons__container">
                    <Link to='project' smooth={true} className='btn' >Explore</Link>
                    <Link to='contact' smooth={true} className='btn btn__primary' >Get a Quote</Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;