import React, { useState, useEffect } from "react";
import "../styles/footer.css";
const Footer = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const savedCounter = localStorage.getItem("counter");
    const currentCounter = savedCounter ? parseInt(savedCounter, 10) : 0;

    const hasIncremented = sessionStorage.getItem("hasIncremented");

    if (!hasIncremented) {
      const newCounter = currentCounter + 1;
      setCounter(newCounter);
      localStorage.setItem("counter", newCounter);

      sessionStorage.setItem("hasIncremented", "true");
    } else {
      setCounter(currentCounter);
    }
  }, []);

  const theYear = () => {
    let date = new Date();
    return date.getFullYear();
  };

  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; {theYear()} Bola Nabil - All rights reserved. Visits:{" "}
          <span className="counter">{counter}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
