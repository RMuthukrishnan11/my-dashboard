
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Analytics from './components/Analytics/Analytics';
import Navbar from './components/Navbar/Navbar';
 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/analytics" element={<Analytics />} /> 
      </Routes>
    </Router>
  );
}

export default App;
