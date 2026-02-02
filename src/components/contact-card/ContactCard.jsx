import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact-card.css";

const ContactCard = ({ icon, title, content, linkPath }) => {
  const Wrapper = linkPath ? Link : "div";

  return (
    <div className="contact-card center-col rounded-4">
      <div className="contact-icon center-row">
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <h2 className="fs-3 fw-bold pt-2">{title}</h2>

      <Wrapper to={linkPath} target="_blank">
        {content}
      </Wrapper>
    </div>
  );
};

export default ContactCard;
