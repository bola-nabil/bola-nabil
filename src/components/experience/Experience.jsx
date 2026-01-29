import React from "react";
import "./experience.css";

const Experience = ({ title, year, company, description }) => {
  return (
    <>
      <div className="resume-box">
        <div className="resume-title">
          <h3>{title}</h3>
        </div>
        <div className="resume-content position-relative">
          <div className="resume-inside p-4">
            <div className="year position-relative fw-bold">
              <p>{year}</p>
            </div>
            <h3>{company}</h3>
            <h3>{description}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
