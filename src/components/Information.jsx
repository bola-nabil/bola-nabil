import React from "react";
import { Link } from "react-router-dom";

const Information = ({ title, className, to, LinkTitle, info }) => {
  return (
    <>
      <li>
        <label>{title}</label>
        <span className={`des-info d-flex ${className}`}>
          <Link className="info-link" to={to} target="_blank">
            {LinkTitle}
          </Link>
          {info}
        </span>
      </li>
    </>
  );
};

export default Information;
