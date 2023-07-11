import React from 'react';
import "../components/Project.css"

const ProjectCards = ({ project }) => {
  const { title, image, technologies, link } = project;

  return (
    <div className="col-md-4">
      <a href={link}>
    <div className="pro-container">

      <div className="card mb-4">

        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text" style={{color: 'black'}}>Link: {description}</p> */}
          <ul className="list-unstyled">Technologies used:
            {technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      </a>
    </div>
    
  );
};

export default ProjectCards;
