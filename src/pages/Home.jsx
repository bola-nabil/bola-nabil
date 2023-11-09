// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

        return (
                <div className='homePage'>
                    <div className='overlay'></div>
                    <div className='header'>
                        <div className='container'>
                            <div className='logo'>
                                <p>bola nabil</p>
                            </div>
                            <nav className={`${showMenu ? 'show' : ''}`}>
                                <ul>
                                    <li>
                                        <Link to='/' className='homeLinks active'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faHouse}/>
                                            </div>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about' className='homeLinks'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faUser}/>
                                            </div>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/resume' className='homeLinks'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faFile}/>
                                            </div>
                                            Resume
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/projects' className='homeLinks'>
                                            <div className='homeIcon'>
                                                <FontAwesomeIcon icon={faListCheck}/>
                                            </div>
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
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
                <div className='homeSection'>
                    <div className='homeContent'>
                        <div className='homeImage'>
                            <img src={require('../photos/myPhoto.jpg')} alt="not found" />
                        </div>
                        <div className='aboutSection'>
                            <div className='homeTitle'>
                                <h2>Bola Nabil</h2>
                                <span>I'm a </span>
                                <span className='second'>Software Engineer</span>
                                <p>I'm a Web Designer. over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <div className='hLinks'>
                                <li>
                                    <Link to='https://www.facebook.com/bolanabil404' target='_blank'>
                                        <div className='homeIcon'>
                                            <FontAwesomeIcon className='icon' icon={faFacebook}/>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.twitter.com/bolaNabil_' target='_blank'>
                                        <div className='homeIcon'>
                                            <FontAwesomeIcon className='icon' icon={faTwitter}/>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.linkedin.com/in/bolanabil' target='_blank'>
                                        <div className='homeIcon'>
                                            <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.github.com/bola-nabil' target='_blank'>
                                        <div className='homeIcon'>
                                            <FontAwesomeIcon className='icon' icon={faGithub}/>
                                        </div>
                                    </Link>
                                </li>
                            </div>
                            <div className='homeBtn'>
                                <div className='contactMe'>
                                    <Link to='/contact' className='linkX' target='_blank'>Contact Me</Link>
                                </div>
                                <div className='myProjects'>
                                    <Link to='/projects' className='linkY' target='_blank'>My Projects</Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        );
};

export default Home;