import React from "react";
import "./skills.css";

const Skills = ({ title, status, style }) => {
  return (
    <div className="skill">
      <h3>
        {title}
        <span>{status}</span>
      </h3>
      <div className="the-progress">
        <span style={{ width: style }}></span>
      </div>
    </div>
  );
};

export default Skills;
