import React from "react";

const Certifcate = ({ src, alt }) => {
  return (
    <div className="certificateBox">
      <div className="certificateImage">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Certifcate;
