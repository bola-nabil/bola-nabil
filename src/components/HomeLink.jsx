import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeLink = ({ to, icon }) => {
  return (
    <>
        <Link to={to} target="_blank">
          <div className="home-icon d-flex justify-content-center align-items-center">
            <FontAwesomeIcon className="icon" icon={icon} />
          </div>
        </Link>
    </>
  );
};

export default HomeLink;
