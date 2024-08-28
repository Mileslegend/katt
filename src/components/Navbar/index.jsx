import React from 'react'
import './Navbar.css'
import { navTabs } from '../../data'
import { Link } from 'react-scroll'
import { RiMenu3Fill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="box">
            {
                navTabs.map((tab, index) => (
                    <Link 
                    to={tab.id}
                    key={index}
                    className='tab'
                    activeClass='g-text'
                    smooth={true}
                    spy={true}
                    offset={-70}
                    >
                    {tab.name}
                    </Link>
                ))
            }
        </div>
        <div className="box">
            <Link
            to='contact'
            className='btn contact__btn'
            >
            Get Started
            </Link>
            <div className="icon__container menu__btn">
                <RiMenu3Fill />
            </div>
        </div>
    </nav>
  )
}

export default Navbar