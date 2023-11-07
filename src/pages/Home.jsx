import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='home'>
                    <div className='overlay'></div>
                    <div className='header'>
                        <div className='container'>
                            <div className='logo'>bola-nabil</div>
                            <nav>
                                <div className='box'>
                                    <li>
                                        <Link className='headLink active' to='/'>
                                            <FontAwesomeIcon className='navIcon' icon={faHouse} />
                                            Home
                                        </Link>
                                    </li>
                                </div>
                                <div className='box'>
                                    <li>
                                        <Link className='headLink' to='/about'>
                                            <FontAwesomeIcon className='navIcon' icon={faUser} />
                                            About
                                        </Link>
                                    </li>
                                </div>
                                <div className='box'>
                                    <li>
                                        <Link className='headLink' to='/resume'>
                                            <FontAwesomeIcon className='navIcon' icon={faFile} />
                                            Resume
                                        </Link>
                                    </li>
                                </div>
                                <div className='box'>
                                    <li>
                                        <Link className='headLink' to='/projects'>
                                            <FontAwesomeIcon className='navIcon' icon={faListCheck} />
                                            Projects
                                        </Link>
                                    </li>
                                </div>
                                <div className='box'>
                                    <li>
                                        <Link className='headLink' to='/contact'>
                                            <FontAwesomeIcon className='navIcon' icon={faPhone} />
                                            Contact
                                        </Link>
                                    </li>
                                </div>
                            </nav>
                        </div>
                            <div className='homeFlex'>
                                <div className='homeSection'>
                                    <div className='imageBox'>
                                        <img src={require('../photos/myPhoto.jpg')} alt="not found" />
                                    </div>
                                    <div className='defAbout'>
                                        <div className='defTitle'>
                                            <h1>Bola Nabil</h1>
                                            <span className='first'>I'm a</span>
                                            <span className='second'>Software Engineer</span>
                                        </div>
                                        <div className='defMe'>
                                            <p>I'm a Web Designer. over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                        </div>
                                        <div className='defLinks'>
                                            <Link to='https://www.facebook.com/bolanabil404' target='_blank'>
                                                <div className='defIcon'>
                                                    <FontAwesomeIcon className='icon' icon={faFacebook}/>
                                                </div>
                                            </Link>
                                            <Link to='https://www.twitter.com/bolaNabil_' target='_blank'>
                                                <div className='defIcon'>
                                                    <FontAwesomeIcon className='icon' icon={faTwitter}/>
                                                </div>
                                            </Link>
                                            <Link to='https://www.linkedin.com/in/bolanabil' target='_blank'>
                                                <div className='defIcon'>
                                                    <FontAwesomeIcon className='icon' icon={faLinkedin}/>
                                                </div>
                                            </Link>
                                            <Link to='https://www.github.com/bola-nabil' target='_blank'>
                                                <div className='defIcon'>
                                                    <FontAwesomeIcon className='icon' icon={faGithub}/>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='defBtn'>
                                            <div className='contactMe'>
                                                <Link to='/contact'>Contact Me</Link>
                                            </div>
                                            <div className='myProjects'>
                                                <Link to='/projects'>My Projects</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;