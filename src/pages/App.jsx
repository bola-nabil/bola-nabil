import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
        case 'home':
            return <Home />;
        case 'about':
            return <About />;
        case 'resume':
            return <Resume />;
        case 'projects':
            return <Projects />;
        case 'contact':
            return <Contact />;
        default:
            return <Home />;
        }
};
const [showMenu, setShowMenu] = useState(false);

return (
            <div className='x'>
                    <div className='xs'></div>
                    <div className='header'>
                        <div className='container'>
                            <div className='logo'>
                                <p>bola nabil</p>
                            </div>
                            <nav className={`${showMenu ? 'show' : ''}`}>
                                <ul>
                                    <li onClick={() => setCurrentPage('home')}>
                                        <Link to='/' className='homeLinks active'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faHouse}/>
                                            </div>
                                            Home
                                        </Link>
                                    </li>
                                    <li onClick={() => setCurrentPage('about')}>
                                        <Link to='/about' className='homeLinks'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faUser}/>
                                            </div>
                                            About
                                        </Link>
                                    </li>
                                    <li onClick={() => setCurrentPage('resume')}>
                                        <Link to='/resume' className='homeLinks'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faFile}/>
                                            </div>
                                            Resume
                                        </Link>
                                    </li>
                                    <li onClick={() => setCurrentPage('projects')}>
                                        <Link to='/projects' className='homeLinks'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faListCheck}/>
                                            </div>
                                            Projects
                                        </Link>
                                    </li>
                                    <li onClick={() => setCurrentPage('contact')}>
                                        <Link to='/contact' className='homeLinks'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faPhone}/>
                                            </div>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                <div className='bars' onClick={() => setShowMenu(!showMenu)}>
                                    <FontAwesomeIcon className='barsIcon' icon={faBars} />
                                </div>
                            </nav>
                    </div>
            </div>
            {renderPage()}
            </div>  
    );
};


export default App;