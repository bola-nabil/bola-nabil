import React from "react";
import "./page-title.css";

const PageTitle = ({ title, first, second }) => {
  return (
    <>
      <div className="box-title text-center">
        <div className="title">
          <h2 className="fw-bold text-uppercase">{title}</h2>
          <div className="inside-text">
            <span className="first text-uppercase">{first} </span>
            <span className="second text-uppercase">{second}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
