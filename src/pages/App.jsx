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
    {/* <div className={`header ${isNavFixed ? "fixed" : ""}`}>
      <div className="container">
        <div className="logo">
          <p>bola-nabil</p>
        </div>
        <nav className={`${showMenu ? "show" : ""}`}>
          <ul>
            <NavLink
              onClick={() => handleItemClick("home")}
              active={activeItem === "home" ? "active" : ""}
              showMenuClick={() => setShowMenu(!showMenu)}
              to="/bola-nabil"
              icon={faHouse}
              title="Home"
            />
            <NavLink
              onClick={() => handleItemClick("about")}
              active={activeItem === "about" ? "active" : ""}
              showMenuClick={() => setShowMenu(!showMenu)}
              to="/about"
              icon={faUser}
              title="About"
            />
            <NavLink
              onClick={() => handleItemClick("resume")}
              active={activeItem === "resume" ? "active" : ""}
              showMenuClick={() => setShowMenu(!showMenu)}
              to="/resume"
              icon={faFile}
              title="Resume"
            />
            <NavLink
              onClick={() => handleItemClick("projects")}
              active={activeItem === "projects" ? "active" : ""}
              showMenuClick={() => setShowMenu(!showMenu)}
              to="/projects"
              icon={faListCheck}
              title="Projects"
            />
            <NavLink
              onClick={() => handleItemClick("contact")}
              active={activeItem === "contact" ? "active" : ""}
              showMenuClick={() => setShowMenu(!showMenu)}
              to="/contact"
              icon={faPhone}
              title="Contact"
            />
          </ul>
        </nav>
        <div className={`bars`} onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon className="barsIcon" icon={faBars} />
        </div>
      </div>
    </div> */}
      <NavBar />
    <Routes>
      <Route path="/bola-nabil" exact element={<Home />} />
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