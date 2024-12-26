
import React from 'react';
import { GitHub } from '@mui/icons-material';
import '../../styles/global.css';
import { workExperienceData } from '../../data/workExperienceData';
import { GlobalStyles } from '@mui/material';

const WorkExperience = () => {


    return (
        <div className="container section">
            <div className="work-experience">
                <h2>Work Experience</h2>
                {workExperienceData.map((experience, index) => (
                    <div className="job" key={index}>
                        <div className="job-header">
                            <div>
                                <h3 className="job-title">{experience.title}</h3>
                                <p className="company-name">{experience.company}</p>
                            </div>
                            <p className="duration">{experience.duration}</p>
                        </div>
                        <p className="job-description">{experience.description}</p>
                        <div className="job-links">
                            {experience.github && (
                                <a href={experience.github} target="_blank" rel="noopener noreferrer">
                                    <GitHub />
                                </a>
                            )}
                            {experience.website && (
                                <a href={experience.website} target="_blank" rel="noopener noreferrer">
                                    <GlobalStyles />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;
