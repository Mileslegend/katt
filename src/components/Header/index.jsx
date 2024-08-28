import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import { solar__skyscraper } from '../../assets'
import SolarSystem from '../SolarSystem'


const Header = () => {
  return (
    <header id='header'>
        <div className="system__wrapper">
            <SolarSystem />
        </div>
        <div className="container full__height blur-effect">
            <div className="column">
                <h1 className="title">Katsmo Safaris <span className="g-text">& Car Hire</span></h1>
                <p className="text__muted">
                Experience the thrill of the African wilderness like never before with Katsmo Safaris! Rent a vehicle and set off on an exhilarating journey through breathtaking landscapes and vibrant cultures. Our expert guides will lead you to unforgettable wildlife encounters, while your personalized itinerary ensures every moment is packed with adventure. Whether it’s spotting the Big Five or discovering hidden gems, your safari is just a drive away. Get ready for an adventure that will ignite your spirit and create memories to last a lifetime!
                </p>
                <div className="buttons__container">
                    <Link to='services' className='btn'>Our Services</Link>
                    <Link to='contact' className='btn btn__primary'>Contact Us</Link>
                </div>
            </div>
            <div className="column">
                <div className="image__container primary-effect">
                    <img src={solar__skyscraper} alt="katsmo" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header