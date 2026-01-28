import React from "react";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import HomeLink from "../../components/HomeLink";
import useData  from "../../hooks/useData";

import "./home.css";

const socialIcons = {
  faFacebookF: faFacebookF,
  faYoutube: faYoutube,
  faLinkedinIn: faLinkedinIn,
  faGithub: faGithub
};

const Home = () => {
  const {content: data} = useData();
  return (
    <div className="home-page position-relative vh-100">
      <div className="overlay position-absolute left-0 top-0 w-100 h-100"></div>
      <div className="home-section position-relative d-flex justify-content-center align-items-center vh-100">
        <div className="home-image">
          <img src={require("../../assets/images/myPhoto.jpg")} alt="not found" />
        </div>
        <div className="about-section">
          <div className="home-title">
            <h2>{data?.name}</h2>
            <span>I'm a </span>
            <span className="second">{data?.jobTitle}</span>
            <p>
              I'm a Frontend Developer. {data?.["experience-years"]} of experience.
              Experienced with all dynamic web projects.
            </p>
            <div className="h-links d-flex">
              {
                data?.social.map((link) => (
                  <div key={link.id}>
                      <HomeLink to={link.website} icon={socialIcons[link.icon]}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
