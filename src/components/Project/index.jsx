import React, { useEffect, useState } from "react";
import "./Project.css";
import { projects } from "../../data";
import ProjectNavigation from "./ProjectNavigation";

const Project = () => {

  const [activeProjects, setActiveProjects] = useState(projects);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 600)
  }, [activeProjects])
  
  const getTabs = () => {
    const tabs = ['All'];
    projects.map((item) => {
        if(!tabs.includes(item.category)){
            tabs.push(item.category);
        }
    } )
    return tabs;
  }

  const setProjects = (value) => {
    if(value === 'All') {
        return setActiveProjects(projects)
    }
    const new__projects = projects.filter((item) => item.category === value);
    setActiveProjects(new__projects)
  } 

  return (
    <section id="project">
      <div className="container">
        <h1 className="title">
          Our <span className="g-text">Tours</span>
        </h1>
        <h3 className="sub__title text__muted">  
        Embark on an unforgettable journey through Uganda's most captivating destinations with our premier tours and car hire services. From the lush landscapes of Bwindi Impenetrable Forest, renowned for its gorilla trekking experiences, to the breathtaking views of Murchison Falls National Park, our tailored tours offer immersive adventures into the heart of Africa's natural beauty.
        </h3>
        <ProjectNavigation 
        tabs={getTabs()}
        onChange={setProjects}
        />
        <div className="projects__container">
          {activeProjects.map((project, index) => (
            <div className={`project__card ${load ? 'zoom__in' : '' }`} key={index}>
              <div className="image__container">
                <img src={project.image} alt={project.title} />
              </div>
              <h3 className="name">{project.title}</h3>
              <p className="text__muted description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
