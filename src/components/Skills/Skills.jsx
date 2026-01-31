import React from "react";
import "./skills.css";

const Skills = ({ title, status, style }) => {
  return (
    <div className="skill">
      <h3 className="text-uppercase">
        {title}
        <span>{status}</span>
      </h3>
      <div className="the-progress">
        <span style={{ width: style }}
          role="progressbar"
          aria-valuenow={parseInt(style)}
          aria-valuemin="0"
          aria-valuemax="100"
        >
        </span>
      </div>
    </div>
  );
};

export default Skills;
