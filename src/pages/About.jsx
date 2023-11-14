import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';

const About = () => {
    function theAge() {
        const today = new Date();
        const birthDate = new Date("2001-03-10");
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
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
                        <p>Hi! My name is bola nabil.
                            I graduated from the Department of Computer Science in 2023.
                            I love the field of programming very much. I have
                            participated in many programming competitions such as ECPC.
                        </p>
                        <p>
                            I currently work as a front-end software developer and have some experience there.
                            My goal is to become professional in the field of software and to develop software that benefits society.
                        </p>
                        <p>
                            Get the bundle and get lifetime support and one year updates.
                            I am available for freelance work. Connect with me via my account.
                        </p>
                    </div>
                    <div className='cvBox'>
                        <Link className='cv' to='https://drive.google.com/file/d/1LXt-Znm9G2jLIIbThJhzCdQ3t8z7nH-z/view?usp=drive_link' target='_blank'>Show Cv</Link>
                    </div>
                </div>
            </div>
            <div className='aboutInfo'>
                <div className='calOne'>
                    <ul>
                        <li>
                            <label>Birthday: </label>
                            <span className='desInfo'>10 Mar, 2001</span>
                        </li>
                        <li>
                            <label>City: </label>
                            <span className='desInfo'>Al-Fayoum, Egypt</span>
                        </li>
                        <li>
                            <label>Study: </label>
                            <span className='desInfo'>Akhbar El Youm Academy</span>
                        </li>
                        <li>
                            <label>Website: </label>
                            <span className='desInfo'>
                                <Link className='infoLink' to='https://bola-nabil.github.io/bola-nabil' target='_blank'>bola-nabil.github.io/bola-nabil</Link>
                            </span>
                        </li>
                        <li>
                            <label>Phone: </label>
                            <span className='desInfo infoLink'>(+20) 102 614 6442</span>
                        </li>
                        <li>
                            <label>Github: </label>
                            <span className='desInfo'>
                                <Link className='infoLink' to='https://www.github.com/bola-nabil' target='_blank'>bola-nabil</Link>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='calTwo'>
                    <ul>
                        <li>
                            <label>Age:  </label>
                            <span className='desInfo'>{theAge()}</span>
                        </li>
                        <li>
                            <label>Experience: </label>
                            <span className='desInfo'>0-1 Years</span>
                        </li>
                        <li>
                            <label>Degree: </label>
                            <span className='desInfo'>Bachelor of Computer Science</span>
                        </li>
                        <li>
                            <label>Email: </label>
                            <span className='desInfo'>
                                <Link className='infoLink' to='mailto:bolanabil404@gmail.com'target='_blank'>bolanabil404@gmail.com</Link>
                            </span>
                        </li>
                        <li>
                            <label>Hackerrank: </label>
                            <span className='desInfo'>
                                <Link className='infoLink' to='https://www.hackerrank.com/profile/bolaNabil' target='_blank'>bolaNabil</Link>
                            </span>
                        </li>
                        <li>
                            <label>leetcode: </label>
                            <span className='desInfo'>
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
};

export default About;