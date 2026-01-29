import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact-card.css";

const ContactCard = ({ icon, title, content, linkPath}) => {
  return (
        <div className="">
       {
          linkPath === undefined ? (
           <div className='contact-card center-col'>
                <div className="contact-icon center-row">
                  <FontAwesomeIcon icon={icon} className="icon"/>
                </div>
                <h2 className='fs-3 fw-bold pt-2'>{title}</h2>
                <p className='mb-0'>{content}</p>
            </div>
          ): (
            <div className='contact-card center-col'>
                 <div className="contact-icon center-row">
                  <FontAwesomeIcon icon={icon} className="icon"/>
                </div>
                <h2 className='fs-3 fw-bold pt-2'>{title}</h2>
                <Link to={linkPath} target='_blank'>
                  {content}
                </Link>
              </div>
          )
       }
    </div>
  );
};

export default ContactCard;
