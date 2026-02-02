import React from "react";
import { motion } from "framer-motion";
import "./skills.css";

const Skills = ({ title, status, style }) => {
  return (
    <div className="skill">
      <h3 className="text-uppercase d-flex align-items-center justify-content-between">
        {title}
        <span>{status}</span>
      </h3>
      <div className="the-progress rounded-3">
        <motion.span 
            initial={{ width: 0 }}
            animate={{ width: style }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            role="progressbar"
            aria-valuenow={parseInt(style)}
            aria-valuemin="0"
            aria-valuemax="100"
        >
        </motion.span>
      </div>
    </div>
  );
};

export default Skills;
