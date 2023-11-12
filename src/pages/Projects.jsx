import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

class Projects extends Component {
    state = {  } 
    render() { 
        return (
            <div className='projects'>
                <div className='container'>
                    <div className='boxTitle'>
                        <div className='title'>
                            <h2>Projects</h2>
                            <div className='insideText'>
                                <span className='first'>My </span>
                                <span className='second'>Projects</span>
                            </div>
                        </div>
                    </div>
                    <div className='projectSection'>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/dashboard.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Dashboard Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://bola-nabil.github.io/Dashboard/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </div>
                                </Link>
                                <Link to='https://github.com/bola-nabil/Dashboard.git/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                            <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/ibsar.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Ibsar Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='http://ebsar.website/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </div>
                                </Link>
                                <Link to='https://github.com/bola-nabil/Ibsar.git' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/protofilo.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Protfolio Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://bola-nabil.github.io/protfolio/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </div>
                                </Link>
                                <Link to='https://github.com/bola-nabil/protfolio.git/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/calculator_project.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Landing Page Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://bola-nabil.github.io/landing-page/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </div>
                                </Link>
                                <Link to='https://github.com/bola-nabil/landing-page.git/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/calculator_project.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>My Website Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://bola-nabil.github.io/bola-nabil/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </div>
                                </Link>
                                <Link to='https://github.com/bola-nabil/bola-nabil.git' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/kasper.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Kasper Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://bola-nabil.github.io/Kasper/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </div>
                                </Link>
                                <Link to='https://github.com/bola-nabil/Kasper.git' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/leon.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Leon Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://bola-nabil.github.io/leon/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </div>
                                </Link>
                                <Link to='https://github.com/bola-nabil/leon.git' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/calculator_project.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Calculator Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://github.com/bola-nabil/calculator.git/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/bankSystem.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Bank System Project</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://github.com/bola-nabil/Bank-System.git/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/leetcode.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Leetcode Problem Solutions</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://github.com/bola-nabil/leetcode.git/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/codeforces.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Codeforces Problem Solutions</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://github.com/bola-nabil/codeforces.git/' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/atcoder.jpg")} alt="not found" />
                            </div>
                            <div className='projectTitle'>
                                <h2>Atcoder Problem Solutions</h2>
                            </div>
                            <div className='projectLinks'>
                                <Link to='https://github.com/bola-nabil/atcoder.git' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Projects;