/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
class Resume extends Component {
    state = {  } 
    render() { 
        return (
            <div className='resume'>
                <div className='container'>
                    <div className='boxTitle'>
                        <div className='title'>
                            <h2>Resume</h2>
                            <div className='insideText'>
                                <span className='first'>My </span>
                                <span className='second'>Resume</span>
                            </div>
                        </div>
                    </div>
                    <div className='resumeSection'>
                        <div className='resumeBox'>
                            <div className='resumeTitle'>
                                <h3>Education</h3>
                            </div>
                            <div className='resumeContent'>
                                <div className='resumeInside'>
                                    <div className='year'>
                                        <p>2023-01-02</p>
                                    </div>

                                    <h3>Ahkbar El Youm Academy</h3>
                                    <h3>Bac In Computer Science</h3>
                                </div>
                            </div>
                        </div>
                        <div className='resumeBox'>
                            <div className='resumeTitle'>
                                <h3>Experience</h3>
                            </div>
                            <div className='resumeContent'>
                                <div className='resumeInside'>
                                    <div className='year'>
                                        <p>2023-10-01</p>
                                    </div>

                                    <h3>Upwork</h3>
                                    <h3>Frontend Developer</h3>
                                </div>
                            </div>
                        </div>
                        <div className='resumeBox'>
                            <div className='resumeTitle'>
                                <h3>Frontend Skills</h3>
                            </div>
                            <div className='resumeSkills'>
                                <div className="skill">
                                    <h3>HTML <span>80%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "80%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>Css <span>75%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "75%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>BootStarp <span>75%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "75%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>JavaScript <span>70%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "70%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>TypeScript <span>70%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "70%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>JQuery <span>90%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "90%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>React <span>65%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "65%"}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='resumeBox'>
                            <div className='resumeTitle'>
                                <h3>Concepts Skills</h3>
                            </div>
                            <div className='resumeSkills'>
                                <div className="skill">
                                    <h3>Data Structures<span>80%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "80%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>Algorithms<span>80%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "80%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>OOP<span>85%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "85%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>SOLID Principles<span>70%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "70%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>Design Patterns <span>65%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "70%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>Problem Solving<span>85%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "90%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>Clean Code <span>75%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "65%"}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='resumeBox'>
                            <div className='resumeTitle'>
                                <h3>Professional Skills</h3>
                            </div>
                            <div className='resumeSkills'>
                                <div className="skill">
                                    <h3>Web Development<span>80%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "80%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>Web Design<span>70%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "70%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>Problem Solving<span>85%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "85%"}}></span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <h3>Clean Code<span>70%</span></h3>
                                    <div className="the-progress">
                                        <span style={{width: "70%"}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='resumeBox'>
                            <div className='resumeTitle'>
                                <h3>Knowledge</h3>
                            </div>
                            <div className='knowskills'>
                                <FontAwesomeIcon className='knowIcon' icon={faBolt} />
                                <p>Provide for Design and Development</p>
                            </div>
                            <div className='knowskills'>
                                <FontAwesomeIcon className='knowIcon' icon={faBolt} />
                                <p>Willingness to learn Technologies</p>
                            </div>
                            <div className='knowskills'>
                                <FontAwesomeIcon className='knowIcon' icon={faBolt} />
                                <p>Problem solving and coordination skills</p>
                            </div>
                            <div className='knowskills'>
                                <FontAwesomeIcon className='knowIcon' icon={faBolt} />
                                <p>Team Handling / Team Work</p>
                            </div>
                            <div className='knowskills'>
                                <FontAwesomeIcon className='knowIcon' icon={faBolt} />
                                <p>Flexible with Working Conditions</p>
                            </div>
                            <div className='knowskills'>
                                <FontAwesomeIcon className='knowIcon' icon={faBolt} />
                                <p>Excellent Listening and Quick Learners</p>
                            </div>
                        </div>
                    </div>
                    <div className='certificate'>
                        <div className='certificateBox'>
                            <div className='certificateImage'>
                                <img src={require('../photos/certificate/icpc2021.jpg')} alt="not found" />
                            </div>
                            <h5>Programming Contest</h5>
                            <p>The 2021 MET Academy Collegiate Programming Contest</p>
                        </div>
                        <div className='certificateBox'>
                            <div className='certificateImage'>
                                <img src={require('../photos/certificate/icpc2021x.jpg')} alt="not found" />
                            </div>
                            <h5>Programming Contest</h5>
                            <p>The 2021 ICPC Egyption Collegiate Programming Contest</p>
                        </div>
                        <div className='certificateBox'>
                            <div className='certificateImage'>
                                <img src={require('../photos/certificate/icpc2022.jpg')} alt="not found" />
                            </div>
                            <h5>Programming Contest</h5>
                            <p>The 2022 ICPC ECPC Qualifications Collegiate Programming Contest</p>
                        </div>
                        <div className='certificateBox'>
                            <div className='certificateImage'>
                                <img src={require('../photos/certificate/icpc2021.jpg')} alt="not found" />
                            </div>
                            <h5>Programming Contest</h5>
                            <p>The 2022 ICPC Egyption Collegiate Programming Contest</p>
                        </div>
                        <div className='certificateBox'>
                            <div className='certificateImage'>
                                <img src={require('../photos/certificate/javascript.jpg')} alt="not found" />
                            </div>
                            <h5>Javascript Basic</h5>
                            <p>Javascipt Basic certificate from Hackerrank</p>
                        </div>
                        <div className='certificateBox'>
                            <div className='certificateImage'>
                                <img src={require('../photos/certificate/css.jpg')} alt="not found" />
                            </div>
                            <h5>Css</h5>
                            <p>Css certificate from Hackerrank</p>
                        </div>
                        <div className='certificateBox'>
                            <div className='certificateImage'>
                                <img src={require('../photos/certificate/freelancer.jpg')} alt="not found" />
                            </div>
                            <h5>Freelancer</h5>
                            <p>Learn to how use upwork and basic freelanceing</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;