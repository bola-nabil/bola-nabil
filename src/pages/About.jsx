import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import PageTitle from "../components/PageTitle";
import Information from "../components/Information";
import profile from "../data/data.json";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <PageTitle title="About" first="About " second="Me" />
          <div className="aboutSection">
            <div className="boxImage">
              <img src={require("../photos/myPhoto.jpg")} alt="not found" />
            </div>
            <div className="aboutBox">
              <div className="title">
                <p>
                  Hi! My name is bola nabil. I graduated from the Department of
                  Computer Science in 2023. I love the field of programming very
                  much. I have participated in many programming competitions
                  such as ECPC.
                </p>
                <p>
                  I currently work as a front-end software developer and have
                  some experience there. My goal is to become professional in
                  the field of software and to develop software that benefits
                  society.
                </p>
                <p>
                  Get the bundle and get lifetime support and one year updates.
                  I am available for freelance work. Connect with me via my
                  account.
                </p>
              </div>
              <div className="cvBox">
                <Link className="cv" to={profile.cv.frontend} target="_blank">
                  Show Cv
                </Link>
              </div>
            </div>
          </div>
          <div className="aboutInfo">
            <div className="calOne">
              <ul>
                <Information title="Birthday: " info={profile.birthday} />
                <Information title="City: " info={profile.city} />
                <Information title="Study: " info={profile.college} />
                <Information
                  title="Portfolio: "
                  to={profile.websites.portfolio}
                  LinkTitle="bola-nabil"
                />
                <Information
                  title="Phone: "
                  info={profile.contact.phone}
                  className="infoLink"
                />
                <Information
                  title="Github: "
                  to={profile.websites.github}
                  LinkTitle="bola-nabil"
                />
              </ul>
            </div>
            <div className="calTwo">
              <ul>
                <Information title="Age: " info={theAge()} />
                <Information title="Experience: " info={profile.experience} />
                <Information title="Degree: " info={profile.degree} />
                <Information
                  title="Email: "
                  to={`mailto:${profile.contact.email}`}
                  LinkTitle={profile.contact.email}
                />
                <Information
                  title="Hackerrank: "
                  to={profile.websites.hackerrank}
                  LinkTitle="bolaNabil"
                />
                <Information
                  title="leetcode: "
                  to={profile.websites.leetcode}
                  LinkTitle="bola-nabil"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

const theAge = () => {
  const today = new Date();
  const birthDate = new Date("2001-03-10");
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};
