import React from 'react';
import { Box, Grid } from '@mui/material';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Analytics from '../Analytics/Analytics';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import '../../styles/global.css';

const Dashboard = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <PersonalDetails />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <WorkExperience />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Education />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Projects />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Skills />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Analytics />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
