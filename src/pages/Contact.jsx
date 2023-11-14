import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Footer from './Footer';
import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await axios.post('http://localhost:3000/', {
            to: email,
            subject,
            text: message,
        });

        setIsSubmitted(true);
        } catch (error) {
        console.error('Error sending email:', error);
          console.log('fuck');
        }

};
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
                            <form onSubmit={handleSubmit}>
                                <div className='infoForm'>
                                    <input type="text" placeholder='Name*' value={name} onChange={(e) => setName(e.target.value)}required/>
                                    <input type="email" placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                                <div className='subject'>
                                    <input type="text" placeholder='Subject*' value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                                </div>
                                    <textarea placeholder='Message*' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                <div className='submit'>
                                    <input type="submit" value='Send Message' />
                                </div>
                            </form>
                            {isSubmitted && (
                            <div style={{ color: 'green', marginTop: '10px' }}>
                            Success! The form was submitted successfully.
                            </div>
                                )}
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


export default Contact;