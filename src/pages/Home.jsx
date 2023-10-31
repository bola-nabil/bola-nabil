import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='home'>
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
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;