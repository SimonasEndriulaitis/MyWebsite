// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ thumbnail, name, description, link }) => (
    <div className='project-card'>
        <img src={thumbnail} alt={name} className='project-thumbnail' />
        <div className='project-info'>
            <h3 className='project-title'>{name}</h3>
            <p className='project-description'>{description}</p>
            {/* <a href={link} className='learn-more-link'>
                Learn More
            </a> */}
        </div>
    </div>
);

export default ProjectCard;
