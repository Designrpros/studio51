import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreativeArtistView from './pages/CreativeArtistView';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Lydhagen from './Lydhagen';  // Import the new Lydhagen one-page component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* The main route now points to the Lydhagen festival page */}
        <Route path="/" element={<Lydhagen />} />  

        {/* Update this route to match the link used in PerformersGallery */}
        <Route path="/aurora" element={<CreativeArtistView />} /> 

        {/* Existing routes remain unchanged */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;