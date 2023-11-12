import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';

class About extends Component {
    state = {  } 
    render() { 
        return (
            <div className='about'>
                <div className='container'>
                    <div className='boxTitle'>
                        <div className='title'>
                            <h2>About</h2>
                            <div className='insideText'>
                                <span className='first'>About </span>
                                <span className='second'>Me</span>
                            </div>
                        </div>
                    </div>
                    <div className='aboutSection'>
                        <div className='boxImage'>
                                <img src={require("../photos/myPhoto.jpg")} alt="not found" />
                        </div>
                        <div className='aboutBox'>
                            <div className='title'>
                                <p>Hi! My name is Shivam. I am UI/UX designer,
                                    and I'm very passionate and dedicated to my work.
                                    With 3 years experience as a professional graphic designer,
                                    I have acquired the skills and knowledge necessary to make your
                                    project a success
                                </p>
                                <p>
                                    Web Developers are build a website’s core structure
                                    using coding languages, while designers are more visually
                                    creative and user-focused. It is a long established fact that
                                    a reader will be distracted by the readable content of a page
                                    when looking at its layout.
                                </p>
                                <p>
                                    Get the bundle and get lifetime support and one year updates.
                                    I am available for freelance work. Connect with me via my account.
                                </p>
                            </div>
                            <div className='cvBox'>
                                <Link className='cv' to='https://drive.google.com/file/d/1LXt-Znm9G2jLIIbThJhzCdQ3t8z7nH-z/view?usp=drive_link' target='_blank'>Download Cv</Link>
                            </div>
                        </div>
                    </div>
                    <div className='aboutInfo'>
                        <div className='calOne'>
                            <ul>
                                <li>
                                    <label>Birthday: </label>
                                    <span>10 Mar, 2001</span>
                                </li>
                                <li>
                                    <label>City: </label>
                                    <span>Al-Fayoum, Egypt</span>
                                </li>
                                <li>
                                    <label>Study: </label>
                                    <span>Akhbar El Youm Academy</span>
                                </li>
                                <li>
                                    <label>Website: </label>
                                    <span>
                                        <Link className='infoLink' to='https://bola-nabil.github.io/bola-nabil' target='_blank'>bola-nabil.github.io/bola-nabil</Link>
                                    </span>
                                </li>
                                <li>
                                    <label>Phone: </label>
                                    <span className='infoLink'>(+20) 102 614 6442</span>
                                </li>
                                <li>
                                    <label>Github: </label>
                                    <span>
                                        <Link className='infoLink' to='https://www.github.com/bola-nabil' target='_blank'>bola-nabil</Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='calTwo'>
                            <ul>
                                <li>
                                    <label>Age:  </label>
                                    <span>22</span>
                                </li>
                                <li>
                                    <label>Experience: </label>
                                    <span>0-1 Years</span>
                                </li>
                                <li>
                                    <label>Degree: </label>
                                    <span>Bachelor's</span>
                                </li>
                                <li>
                                    <label>Email: </label>
                                    <span>
                                        <Link className='infoLink' to='mailto:bolanabil404@gmail.com'target='_blank'>bolanabil404@gmail.com</Link>
                                    </span>
                                </li>
                                <li>
                                    <label>Hackerrank: </label>
                                    <span>
                                        <Link className='infoLink' to='https://www.hackerrank.com/profile/bolaNabil' target='_blank'>bolaNabil</Link>
                                    </span>
                                </li>
                                <li>
                                    <label>leetcode: </label>
                                    <span>
                                        <Link className='infoLink' to='https://www.leetcode.com/bola-nabil' target='_blank'>bola-nabil</Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;