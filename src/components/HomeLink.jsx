import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeLink = ({ to, icon }) => {
  return (
    <>
      <li>
        <Link to={to} target="_blank">
          <div className="homeIcon">
            <FontAwesomeIcon className="icon" icon={icon} />
          </div>
        </Link>
      </li>
    </>
  );
};

export default HomeLink;
