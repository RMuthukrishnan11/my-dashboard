import React from 'react';
import { educationData } from '../../data/educationData';
import '../../styles/global.css';

const Education = () => {
    return (
        <div className="container section">
            <div className="education">
                <h2>Education</h2>
                {educationData.map((edu, index) => (
                    <div className="degree" key={index}>
                        <div className="degree-header">
                            <div>
                                <h3 className="degree-title">{edu.degree}</h3>
                                <p className="institution-name">{edu.institution}</p>
                            </div>
                            <p className="graduation-year">Graduated: {edu.graduationYear}</p>
                        </div>
                        <p className="gpa">GPA: {edu.gpa}</p>
                        <div className="achievements">
                            <h4>Achievements</h4>
                            <ul>
                                {edu.achievements.map((achievement, idx) => (
                                  
                                        <span>{achievement}</span>
                                    
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
