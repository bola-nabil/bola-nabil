import React from "react";
import { Link } from "react-router-dom";

const Information = ({ title, className, to, LinkTitle, info }) => {
  return (
    <>
      <li>
        <label>{title}</label>
        <span className={`desInfo d-flex ${className}`}>
          <Link className="infoLink" to={to} target="_blank">
            {LinkTitle}
          </Link>
          {info}
        </span>
      </li>
    </>
  );
};

export default Information;
