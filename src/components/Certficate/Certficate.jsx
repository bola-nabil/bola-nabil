import React from "react";
import "./certficate.css";

const Certifcate = ({ src, alt }) => {
  return (
    <div className="certificate-box">
      <div className="certificate-image">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Certifcate;
