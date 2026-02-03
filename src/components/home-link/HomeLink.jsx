import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home-link.css";

const HomeLink = ({ to, icon, aria}) => {
  return (
    <>
        <Link to={to} target="_blank" aria-label={aria}>
          <div className="home-icon center-row bg-black">
            <FontAwesomeIcon className="icon" icon={icon} />
          </div>
        </Link>
    </>
  );
};

export default HomeLink;
