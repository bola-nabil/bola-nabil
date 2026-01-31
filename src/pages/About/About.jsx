import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";
import PageTitle from "../../components/ui/paget-title/PageTitle";
import AboutMe from "../../components/about-me/AboutMe";
import  useData from "../../hooks/useData";
import myPhoto from "../../assets/images/my-photo.jpg";
import "./about.css";

const About = () => {
  const {content: data} = useData();

  return (
    <>
      <main className="about">
        <div className="container">
          <PageTitle title="About" first="About " second="Me" />
          <div className="about-section center-row">
            <figure className="box-image">
              <img src={myPhoto} alt="Bola Nabil profile" />
            </figure >
            <div className="about-box rounded-3">
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
                <Link className="cv fw-bold text-uppercase center-row rounded-3" to={data?.cv?.frontend} target="_blank"  rel="noopener noreferrer">
                  Show Cv
                </Link>
              </div>
            </div>

          </div>
          <div className="about-info">
            {
              data?.["about-me"]?.map((info) => (
                <AboutMe key={info.id} title={info.title} content={info.content} linkPath={info.link}/>
              ))
            }
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;