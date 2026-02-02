import React from "react";
import { motion } from "framer-motion";
import "./certficate.css";

const Certifcate = ({ src, alt }) => {
  return (
     <motion.div
      className="certificate-box rounded-3"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="certificate-image">
        <img src={src} alt={alt} className="rounded-3" />
      </div>
    </motion.div>
  );
};

export default Certifcate;
