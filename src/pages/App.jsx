import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';

const App = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    }

    const [isNavFixed, setNavFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const threshold = 100;
        setNavFixed(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

return (
    <div className='x'>
    <div className={`header ${isNavFixed ? 'fixed' : ''}`}>
        <div className='container'>
            <div className='logo'>
                <p>bola-nabil</p>
            </div>
            <nav className={`${showMenu ? 'show' : ''}`}>
                <ul>
                    <li onClick={() =>  handleItemClick('home') } className={activeItem === 'home' ? 'active' : ''} >
                        <Link onClick={() => setShowMenu(!showMenu)} to='/bola-nabil' className='homeLinks'>
                            <div className='homeIcon'>
                                <FontAwesomeIcon icon={faHouse}/>
                            </div>
                            Home
                        </Link>
                    </li>
                    <li onClick={() =>  handleItemClick('about') } className={activeItem === 'about' ? 'active' : ''} >
                        <Link onClick={() => {setShowMenu(!showMenu); handleItemClick('about');}} to='/about' className='homeLinks'>
                            <div className='homeIcon'>
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                            About
                        </Link>
                    </li>
                    <li onClick={() => handleItemClick('resume') } className={activeItem === 'resume' ? 'active' : ''} >
                        <Link onClick={() => setShowMenu(!showMenu)} to='/resume' className='homeLinks'>
                            <div className='homeIcon'>
                                <FontAwesomeIcon icon={faFile}/>
                            </div>
                            Resume
                        </Link>
                    </li>
                    <li onClick={() => handleItemClick('projects')} className={activeItem === 'projects' ? 'active' : ''} >
                        <Link onClick={() => setShowMenu(!showMenu)} to='/projects' className='homeLinks'>
                            <div className='homeIcon'>
                                <FontAwesomeIcon icon={faListCheck}/>
                            </div>
                            Projects
                        </Link>
                    </li>
                    <li onClick={() => handleItemClick('contact')} className={activeItem === 'contact' ? 'active' : ''} >
                        <Link onClick={() => setShowMenu(!showMenu)} to='/contact' className='homeLinks'>
                            <div className='homeIcon'>
                                <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
                <div className={`bars`} onClick={() => setShowMenu(!showMenu)}>
                    <FontAwesomeIcon className='barsIcon' icon={faBars} />
                </div>
            </div>
</div>

    <Routes>
        <Route path='/bola-nabil'  exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>} />
    </Routes>
    </div>  
    );
};

export default App;