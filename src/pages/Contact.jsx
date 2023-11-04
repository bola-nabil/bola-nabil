import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className='contact'>
                <div className='container'>
                    <div className='boxTitle'>
                        <div className='title'>
                            <h2>Contact</h2>
                            <div className='insideText'>
                                <span className='first'>Get In </span>
                                <span className='second'>Touch</span>
                            </div>
                        </div>
                    </div>
                    <div className='contactSection'>
                        <div className='contactLocation'>
                            <div className='contactIcon'>
                                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                            </div>
                            <h2>My Location:</h2>
                            <p>Egypt, Al-Fayoum</p>
                        </div>
                        <div className='contactPhone'>
                            <div className='contactIcon'>
                                <FontAwesomeIcon className='icon' icon={faPhone} />
                            </div>
                            <h2>Phone Number:</h2>
                            <p className='phoneNumber'>(+20) 102 614 6442</p>
                        </div>
                        <div className='contactEmail'>
                            <div className='contactIcon'>
                                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                            </div>
                            <h2>Email Address:</h2>
                            <Link className='mailContact' to='mailto:bolanabil404@gmail.com'>bolanabil404@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;