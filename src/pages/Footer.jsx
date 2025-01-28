import React, { useState, useEffect } from "react";
import "../styles/footer.css";
const Footer = () => {
  const [totalVisits, setTotalVisits] = useState(0);
  const [userVisits, setUserVisits] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      const incrementTotalVisits = async () => {
        try {
          await fetch("http://localhost:5000/api/visits/increment", {
            method: "POST",
          });

          const response = await fetch("http://localhost:5000/api/visits");
          const data = await response.json();
          setTotalVisits(data.totalVisits);
        } catch (error) {
          console.error("Error updating or fetching visit data:", error);
        }
      };

      const savedUserVisits = localStorage.getItem("userVisits");
      const currentUserVisits = savedUserVisits
        ? parseInt(savedUserVisits, 10)
        : 0;
      const newUserVisits = currentUserVisits + 1;

      localStorage.setItem("userVisits", newUserVisits);
      setUserVisits(newUserVisits);

      sessionStorage.setItem("hasVisited", "true");

      incrementTotalVisits();
    } else {
      const savedUserVisits = localStorage.getItem("userVisits");
      setUserVisits(savedUserVisits ? parseInt(savedUserVisits, 10) : 0);

      const fetchTotalVisits = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/visits");
          const data = await response.json();
          setTotalVisits(data.totalVisits);
        } catch (error) {
          console.error("Error fetching total visits:", error);
        }
      };

      fetchTotalVisits();
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
          <span className="counter">
            {totalVisits} | Your Visits: {userVisits}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
