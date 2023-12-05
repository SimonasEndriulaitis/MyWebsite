import React from 'react';
import '../../App.css';
import ProjectCard from '../ProjectCard'; 
import './Projects.css'; 


const projectsData = [
    {
        id: 1,
        name: 'Orb',
        description: 'RGB ORB ANIMATION',
        thumbnail: 'images/img-2.jpg',
        link: '/project1-details', // Link to the project details page
    },
    {
        id: 2,
        name: 'Orb',
        description: 'RGB ORB ANIMATION',
        thumbnail: 'images/img-2.jpg',
        link: '/project1-details', // Link to the project details page
    },
    {
        id: 3,
        name: 'Orb',
        description: 'RGB ORB ANIMATION',
        thumbnail: 'images/img-2.jpg',
        link: '/project1-details', // Link to the project details page
    },
    // Add 
    // Add more projects as needed
];

function Projects() {
    return (
        <div className='projects-container'>
            <h1 className='project-title'>Projects</h1>
            <div className='project-cards-container'>
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
