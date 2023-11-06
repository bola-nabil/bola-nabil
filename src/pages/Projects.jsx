import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                            {/* <div className='projectLinks'>
                                <Link className='userLink' to='https://www.github.com/bola-nabil' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faLink} />
                                    </div>
                                </Link>
                                <Link className='userLink' to='https://www.github.com/bola-nabil' target='_blank'>
                                    <div className='projectIcon'>
                                        <FontAwesomeIcon className='icon' icon={faGithub} />
                                    </div>
                                </Link>
                            </div> */}

                            <div className='projectImage'>
                                {/* <img src={require("../photos/projects/calculator_project.jpg")} alt="not found" /> */}
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectLinks'>
                                    <Link to='https://www.github.com/bola-nabil' target='_blank'></Link>
                                    <Link to='https://www.github.com/bola-nabil' target='_blank'></Link>
                            </div>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/calculator_project.jpg")} alt="not found" />
                            </div>
                        </div>
                        <div className='projectBox'>
                            <div className='projectLinks'>
                                    <Link to='https://www.github.com/bola-nabil' target='_blank'></Link>
                                    <Link to='https://www.github.com/bola-nabil' target='_blank'></Link>
                            </div>
                            <div className='projectImage'>
                                <img src={require("../photos/projects/calculator_project.jpg")} alt="not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;