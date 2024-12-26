import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar,  IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import '../../styles/global.css';

const Navbar = () => {
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#3498db' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Avatar />
                {isMobile ? (
                    <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <div style={{ display: 'flex', gap: '1px' }}>
                        <Link to="/" className={`btn ${isActive('/')}`} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                            <IconButton color="inherit" sx={{ fontSize: isMobile ? '10px' : '12px' }}>
                                <DashboardIcon />
                            </IconButton>
                            Dashboard
                        </Link>
                        <Link to="/work-experience" className={`btn ${isActive('/work-experience')}`} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                            <IconButton color="inherit" sx={{ fontSize: isMobile ? '10px' : '12px' }}>
                                <WorkIcon />
                            </IconButton>
                            Work Experience
                        </Link>
                        <Link to="/education" className={`btn ${isActive('/education')}`} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                            <IconButton color="inherit" sx={{ fontSize: isMobile ? '10px' : '12px' }}>
                                <SchoolIcon />
                            </IconButton>
                            Education
                        </Link>
                        <Link to="/projects" className={`btn ${isActive('/projects')}`} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                            <IconButton color="inherit" sx={{ fontSize: isMobile ? '10px' : '12px' }}>
                                <CodeIcon />
                            </IconButton>
                            Projects
                        </Link>
                        <Link to="/skills" className={`btn ${isActive('/skills')}`} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                            <IconButton color="inherit" sx={{ fontSize: isMobile ? '10px' : '12px' }}>
                                <BuildIcon />
                            </IconButton>
                            Skills
                        </Link>
                        <Link to="/personal-details" className={`btn ${isActive('/personal-details')}`} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                            <IconButton color="inherit" sx={{ fontSize: isMobile ? '10px' : '12px' }}>
                                <PersonIcon />
                            </IconButton>
                            Personal Details
                        </Link>
                        <Link to="/analytics" className={`btn ${isActive('/analytics')}`} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                            <IconButton color="inherit" sx={{ fontSize: isMobile ? '10px' : '12px' }}>
                                <AnalyticsIcon />
                            </IconButton>
                            Analytics
                        </Link>
                    </div>
                )}
            </Toolbar>

            {/* Drawer for Mobile */}
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                    <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                        <IconButton color="inherit" sx={{ fontSize: '18px' }}>
                            <DashboardIcon />
                        </IconButton>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="/work-experience" onClick={handleDrawerToggle}>
                        <IconButton color="inherit" sx={{ fontSize: '18px' }}>
                            <WorkIcon />
                        </IconButton>
                        <ListItemText primary="Work Experience" />
                    </ListItem>
                    <ListItem button component={Link} to="/education" onClick={handleDrawerToggle}>
                        <IconButton color="inherit" sx={{ fontSize: '18px' }}>
                            <SchoolIcon />
                        </IconButton>
                        <ListItemText primary="Education" />
                    </ListItem>
                    <ListItem button component={Link} to="/projects" onClick={handleDrawerToggle}>
                        <IconButton color="inherit" sx={{ fontSize: '18px' }}>
                            <CodeIcon />
                        </IconButton>
                        <ListItemText primary="Projects" />
                    </ListItem>
                    <ListItem button component={Link} to="/skills" onClick={handleDrawerToggle}>
                        <IconButton color="inherit" sx={{ fontSize: '18px' }}>
                            <BuildIcon />
                        </IconButton>
                        <ListItemText primary="Skills" />
                    </ListItem>
                    <ListItem button component={Link} to="/personal-details" onClick={handleDrawerToggle}>
                        <IconButton color="inherit" sx={{ fontSize: '18px' }}>
                            <PersonIcon />
                        </IconButton>
                        <ListItemText primary="Personal Details" />
                    </ListItem>
                    <ListItem button component={Link} to="/analytics" onClick={handleDrawerToggle}>
                        <IconButton color="inherit" sx={{ fontSize: '18px' }}>
                            <AnalyticsIcon />
                        </IconButton>
                        <ListItemText primary="Analytics" />
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
