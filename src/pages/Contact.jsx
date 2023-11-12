import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Footer from './Footer';

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
                    <div className='contactMessage'>
                        <div className='messageBox'>
                            <form action="mailto:bolanabil404@gmail.com">
                                <div className='infoForm'>
                                    <input type="text" placeholder='Name*' required/>
                                    <input type="email" placeholder='Email*' required/>
                                </div>
                                <div className='subject'>
                                    <input type="text" placeholder='Subject*'/>
                                </div>
                                    <textarea placeholder='Message*' required></textarea>
                                <div className='submit'>
                                    <input type="submit" value='Send Message' />
                                </div>
                            </form>
                        </div>
                        <div className='mapBox'>
                            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d258.44339217918514!2d30.90221538442333!3d29.36484403875814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1699171481734!5m2!1sar!2seg"></iframe>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;