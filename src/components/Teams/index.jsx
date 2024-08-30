import React from 'react'
import './Teams.css'
import { teams } from '../../data'
import { Link } from 'react-scroll'


const Teams = () => {
  return (
    <section id='team'>
        <div className="container">
            <h1 className="title">
                Our <span className="g-text">Teams</span>
            </h1>
            <p className="text__muted description">Introducing the fearless adventurers who make up the heart and soul of our expedition team! 🌿🌍</p>
            <div className="team__container">
                {
                teams.map((team,index) => (
                    <div className="team__card" key={index}>
                        <div className="profile__container">
                            <img src={team.profile} alt={team.name} />
                        </div>
                        <div className="details">
                            <h3 className="name">{team.name}</h3>
                            <p className="text__muted">{team.title}</p>
                        </div>
                        <div className="social__container">
                            {
                                team.social.map((item,i) => (
                                    <Link 
                                    to={item.url || '/'} 
                                    target='_blank' 
                                    className='icon__container' 
                                    key={i}>
                                    {
                                        item.icon
                                    }
                                    </Link>
                                ) )
                            }
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Teams