import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';
import React, { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from '../components/NavBar';

const App = () => {

return (
  <>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
};

export default App;