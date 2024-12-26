import React, { useState, useEffect } from 'react';
import '../../styles/global.css';


const fetchSkillsData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                frontEnd: ["HTML", "CSS", "JavaScript", "React", "Next", "Bootstrap"],
                backEnd: ["Node.js", "Express", "MongoDB"],
                tools: ["Git", "Webpack"],
            });
        }, 2000); 
    });
};

const Skills = () => {
    const [skills, setSkills] = useState(null); 
    const [loading, setLoading] = useState(true); 


    useEffect(() => {
        const getSkills = async () => {
            try {
                const data = await fetchSkillsData(); 
                setSkills(data); 
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching skills data", error);
            }
        };

        getSkills(); 
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container section">
            <div className="skills">
                <h2>Skills</h2>
                <div className="skill-category">
                    <h3>Front-End Development</h3>
                    <ul>
                        {skills.frontEnd.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Back-End Development</h3>
                    <ul>
                        {skills.backEnd.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Development Tools</h3>
                    <ul>
                        {skills.tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </div>

                <div className="progress-bar-container">
                    <h3>Proficiency</h3>
                    <div className="progress-bar">
                        <span className="html"></span>
                    </div>
                    <div className="progress-bar">
                        <span className="css"></span>
                    </div>
                    <div className="progress-bar">
                        <span className="javascript"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
