import React, { useState } from 'react'
import './ProjectNavigation.css'
import { setActiveLink } from 'react-scroll/modules/mixins/scroller'

const ProjectNavigation = ({tabs, onChange}) => {

    const [active, setActive] = useState('All')
  return (
    <div className='project__navigation' >
        {
            tabs.map((name,index) => (
                <button
                onClick={() => {
                    setActive(name)
                }}
                >
                    {name}
                </button>
            ))
        }
    </div>
  )
}

export default ProjectNavigation