import React from "react";
const PageTitle = ({ title, first, second }) => {
  return (
    <>
      <div className="boxTitle">
        <div className="title">
          <h2>{title}</h2>
          <div className="insideText">
            <span className="first">{first} </span>
            <span className="second">{second}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
