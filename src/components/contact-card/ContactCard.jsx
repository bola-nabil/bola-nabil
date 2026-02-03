import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "./contact-card.css";

const ContactCard = ({ icon, title, content, linkPath }) => {
  const Wrapper = linkPath ? Link : "div";

  return (
    <motion.div
      className="contact-card center-col rounded-4"
      initial={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{duration: 0.4, ease: "easeOut"}}
    >
      <div className="contact-icon center-row">
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <h2 className="fs-3 fw-bold pt-2">{title}</h2>

      <Wrapper to={linkPath} target="_blank" aria-label={`Contact via ${title}`}>
        {content}
      </Wrapper>
    </motion.div>
  );
};

export default ContactCard;
