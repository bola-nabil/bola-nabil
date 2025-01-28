import React from "react";
const Experience = ({ title, year, company, description }) => {
  return (
    <>
      <div className="resumeBox">
        <div className="resumeTitle">
          <h3>{title}</h3>
        </div>
        <div className="resumeContent">
          <div className="resumeInside">
            <div className="year">
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
