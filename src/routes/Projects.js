import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PagesImage from '../components/PagesImage';
import ProjectCard from '../components/ProjectCards';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"



const projects = [
  { title: 'Todo App', link: 'https://kiranuday97.github.io/React_ToDo_App/ ', image: project1, technologies: ['React', 'JavaScript'] },
  { title: 'Restaurant App', link: ' https://Kiranuday97.github.io/React_Restaurant_App', image: project2, technologies: ['React', 'Javascript'] },
];

const Projects = () => {

  
  return (
    <div>
      <Navbar/>
      <PagesImage heading="Projects" text=""/>

      <div className='container'>
      <div className='row pt-5'>
        
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
       

      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Projects
