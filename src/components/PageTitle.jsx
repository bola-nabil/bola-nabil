import React from "react";
const PageTitle = ({ title, first, second }) => {
  return (
    <>
      <div className="boxTitle text-center">
        <div className="title">
          <h2 className="fw-bold text-uppercase">{title}</h2>
          <div className="insideText">
            <span className="first text-uppercase">{first} </span>
            <span className="second text-uppercase">{second}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
