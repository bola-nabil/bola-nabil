import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';
import PageTitle from '../components/PageTitle';
import Information from '../components/Information';

const About = () => {
return (
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
              much. I have participated in many programming competitions such as
              ECPC.
            </p>
            <p>
              I currently work as a front-end software developer and have some
              experience there. My goal is to become professional in the field
              of software and to develop software that benefits society.
            </p>
            <p>
              Get the bundle and get lifetime support and one year updates. I am
              available for freelance work. Connect with me via my account.
            </p>
          </div>
          <div className="cvBox">
            <Link
              className="cv"
              to="https://drive.google.com/file/d/1Gs-aH1ZPc-2gZEGbn2bx_SoI5A1AuhYO/view?usp=sharing"
              target="_blank"
            >
              Show Cv
            </Link>
          </div>
        </div>
      </div>
      <div className="aboutInfo">
        <div className="calOne">
          <ul>
            <Information title="Birthday: " info="10 Mar, 2001" />
            <Information title="City: " info="Al-Fayoum, Egypt" />
            <Information title="Study: " info="Akhbar El Youm Academy" />
            <Information
              title="Protfolio: "
              to="https://bola-nabil.github.io/bola-nabil"
              LinkTitle="bola-nabil.github.io/bola-nabil"
            />
            <Information
              title="Phone: "
              info="(+20) 102 614 6442"
              className="infoLink"
            />
            <Information
              title="Github: "
              to="https://www.github.com/bola-nabil"
              LinkTitle="bola-nabil"
            />
          </ul>
        </div>
        <div className="calTwo">
          <ul>
            <Information title="Age: " info={theAge()} />
            <Information title="Experience: " info="0-1 Years" />
            <Information title="Degree: " info="Bachelor of Computer Science" />
            <Information
              title="Email: "
              to="mailto:bolanabil404@gmail.com"
              LinkTitle="bolanabil404@gmail.com"
            />
            <Information
              title="Hackerrank: "
              to="https://www.hackerrank.com/profile/bolaNabil"
              LinkTitle="bolaNabil"
            />
            <Information
              title="leetcode: "
              to="https://www.leetcode.com/bola-nabil"
              LinkTitle="bola-nabil"
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
};

export default About;

function theAge() {
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
}