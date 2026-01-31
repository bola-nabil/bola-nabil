import React from "react";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import HomeLink from "../../components/home-link/HomeLink";
import useData  from "../../hooks/useData";
import myPhoto from "../../assets/images/my-photo.jpg";
import "./home.css";

const socialIcons = {
  faFacebookF,
   faYoutube,
   faLinkedinIn,
   faGithub
};

const Home = () => {
  const {content: data} = useData();
  return (
    <main className="home-cover position-relative vh-100">
      <div className="overlay position-absolute left-0 top-0 w-100 h-100"></div>
      <div className="home-section position-relative d-flex justify-content-center align-items-center vh-100">
        <div className="home-image">
          <img src={myPhoto} alt="Bola Nabil profile" />
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
                data?.social?.map((link) => (
                  <div key={link.id}>
                      <HomeLink to={link.website} icon={socialIcons[link.icon]}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
