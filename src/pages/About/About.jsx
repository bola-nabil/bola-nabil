import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";
import PageTitle from "../../components/ui/PageTitle";
import Information from "../../components/Information";
import  useData from "../../hooks/useData";
import { calcAge } from "../../utilts/calcAge";
import "./about.css";

const About = () => {
  const data = useData();


  return (
    <>
      <div className="about">
        <div className="container">
          <PageTitle title="About" first="About " second="Me" />
          <div className="about-section">
            <div className="box-image">
              <img src={require("../../assets/images/myPhoto.jpg")} alt="not found" />
            </div>
            <div className="about-box">
              <div className="title p-4 fs-5 text-secondary">
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
              <div className="cv-box">
                <Link className="cv" to={data?.cv?.frontend} target="_blank">
                  Show Cv
                </Link>
              </div>
            </div>

          </div>
          <div className="about-info">
            <div className="cal-one">
              <ul>
                <Information title="Birthday: " info={data?.birthday} />
                <Information title="City: " info={data?.city} />
                <Information title="Study: " info={data?.college} />
                <Information
                  title="Portfolio: "
                  to={data?.websites?.portfolio}
                  LinkTitle="bola-nabil"
                />
                <Information
                  title="Phone: "
                  info={data?.contact?.phone}
                  className="info-link text-decoration-none"
                />
                <Information
                  title="Github: "
                  to={data?.websites?.github}
                  LinkTitle="bola-nabil"
                />
              </ul>
            </div>
            <div className="cal-two">
              <ul>
                <Information title="Age: " info={calcAge()} />
                <Information title="Experience: " info={data?.experience} />
                <Information title="Degree: " info={data?.degree} />
                <Information
                  title="Email: "
                  to={`mailto:${data?.contact?.email}`}
                  LinkTitle={data?.contact?.email}
                />
                <Information
                  title="Hackerrank: "
                  to={data?.websites?.hackerrank}
                  LinkTitle="bolaNabil"
                />
                <Information
                  title="leetcode: "
                  to={data?.websites?.leetcode}
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