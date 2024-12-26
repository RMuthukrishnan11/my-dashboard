import React from 'react';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';
import { personalData } from '../../data/personalData';
import '../../styles/global.css';

const PersonalDetails = () => {
    return (
        <div className="container section">
            <div className="personal-details">
                <h2>Personal Details</h2>
                <div className="personal-info">
                    <img src={personalData.image} alt="Profile" />
                    <h3>{personalData.name}</h3>
                    <p>{personalData.title}</p>
                    <p>{personalData.bio}</p>
                </div>
                <div className="contact-info">
                    <p><Email style={{color:"#3e65cf"}}/> {" "} {personalData.contact.email}</p>
                    <p ><Phone style={{color:"#f2a60c"}}/>  {" "} {personalData.contact.phone}</p>
                </div>
                <div className="social-links">
                    <a href={personalData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedIn /> {" "} LinkedIn
                    </a>
                    <a href={personalData.socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <GitHub /> {" "} GitHub
                    </a>
                </div>


            </div>
        </div>
    );
};

export default PersonalDetails;
