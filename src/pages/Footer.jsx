import React from 'react';

const Footer = () => {
    function theYear () {
        let date = new Date();
        return date.getFullYear();
    }
    return ( 
        <footer>
            <p>&copy; {theYear()} Bola Nabil  -  All rights reserved.</p>
        </footer>
    );
}

export default Footer;