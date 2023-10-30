import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='home'>
                    <div className='header'>
                        <div className='container'>
                            <div className='logo'>
                                <p>Bola</p>
                            </div>
                            <nav>
                                <div className='box'>
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                </div>
                                <div className='box'>
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                </div>
                                <div className='box'>
                                    <li>
                                        <Link to='/resume'>Resume</Link>
                                    </li>
                                </div>
                                <div className='box'>
                                    <li>
                                        <Link to='/projects'>Projects</Link>
                                    </li>
                                </div>
                                <div className='box'>
                                    <li>
                                        <Link to='/contact'>Contact</Link>
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