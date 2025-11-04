import React from "react";
import { currentYear } from "../utilts/currentYear";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="position-relative left-0 bottom-0">
      <div className="footer-content w-100 d-flex justify-content-center align-items-center position-relative flex-column bg-black">
        <p className="m-auto fs-5">&copy; {currentYear()} Bola Nabil - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
