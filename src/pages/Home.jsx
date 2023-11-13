// import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
        return (
            <div className='homePage'>
                <div className="overlay"></div>
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
                                <p>I'm a Frontend Developer. 0 - 1 years of experience. Experienced with all  dynamic web projects.</p>
                            <div className='hLinks'>
                                <li>
                                    <Link to='https://www.facebook.com/bolanabil404' target='_blank'>
                                        <div className='homeIcon'>
                                            <FontAwesomeIcon className='icon' icon={faFacebookF} />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.twitter.com/bolaNabil_' target='_blank'>
                                        <div className='homeIcon'>
                                            <FontAwesomeIcon className='icon' icon={faXTwitter} />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='https://www.linkedin.com/in/bolanabil' target='_blank'>
                                        <div className='homeIcon'>
                                            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
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
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        );
};

export default Home;