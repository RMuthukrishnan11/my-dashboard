import React from 'react';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { projectData } from '../../data/projectsData';
import '../../styles/global.css';

const Projects = () => {
    return (
        <div className="container section">
            <div className="projects">
                <h2>Projects</h2>
                {projectData.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="project-header">
                            <div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-date">{project.date}</p>
                            </div>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-links">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <GitHub />
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <OpenInNew />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
