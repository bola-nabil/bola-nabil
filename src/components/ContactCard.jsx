import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactCard = ({ className, icon, title, classContact, description }) => {
  return (
    <>
      <div className={className}>
        <div className="contact-icon">
          <FontAwesomeIcon className="icon" icon={icon} />
        </div>
        <h2>{title}</h2>
        <p className={classContact}>{description}</p>
      </div>
    </>
  );
};

export default ContactCard;
