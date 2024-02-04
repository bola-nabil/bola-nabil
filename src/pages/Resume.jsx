import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Certifcate from '../components/Certficate';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import PageTitle from '../components/PageTitle';

function Resume() {
return (
  <div className="resume">
    <div className="container">
      <PageTitle title="Resume" first="MY " second="Resume"/>
      <div className="resumeSection">
        <Experience
          title="Education"
          year="2019-09-20"
          company="Ahkbar El Youm Academy"
          description="Bachelor of Computer Science"
        />
        <Experience
          title="Experience"
          year="2023-10-01"
          company="Upwork"
          description="Frontend Developer"
        />

        <div className="resumeBox">
          <div className="resumeTitle">
            <h3>Frontend Skills</h3>
          </div>
          <div className="resumeSkills">
            <Skills title="html" case="80%" style={{ width: "80%" }} />
            <Skills title="css" case="75%" style={{ width: "75%" }} />
            <Skills title="Bootstarp" case="75%" style={{ width: "75%" }} />
            <Skills title="JavaScript" case="70%" style={{ width: "70%" }} />
            <Skills title="TypeScript" case="70%" style={{ width: "70%" }} />
            <Skills title="Jquery" case="90%" style={{ width: "90%" }} />
            <Skills title="React" case="65%" style={{ width: "65%" }} />
          </div>
        </div>

        <div className="resumeBox">
          <div className="resumeTitle">
            <h3>Concepts Skills</h3>
          </div>
          <div className="resumeSkills">
            <Skills
              title="Data Structures"
              case="80%"
              style={{ width: "80%" }}
            />
            <Skills title="Algorithms" case="80%" style={{ width: "80%" }} />
            <Skills title="oop" case="85%" style={{ width: "85%" }} />
            <Skills
              title="SOLID Principles"
              case="70%"
              style={{ width: "70%" }}
            />
            <Skills
              title="Design Patterns"
              case="65%"
              style={{ width: "65%" }}
            />
            <Skills
              title="Problem Solving"
              case="85%"
              style={{ width: "85%" }}
            />
            <Skills title="clean code" case="75%" style={{ width: "75%" }} />
          </div>
        </div>

        <div className="resumeBox">
          <div className="resumeTitle">
            <h3>Professional Skills</h3>
          </div>
          <div className="resumeSkills">
            <Skills
              title="Web Development"
              case="80%"
              style={{ width: "80%" }}
            />
            <Skills title="Web Design" case="75%" style={{ width: "75%" }} />
            <Skills
              title="Backend Development"
              case="70%"
              style={{ width: "70%" }}
            />
            <Skills
              title="responsive design"
              case="80%"
              style={{ width: "80%" }}
            />
            <Skills title="Linux" case="70%" style={{ width: "70%" }} />
          </div>
        </div>

        <div className="resumeBox">
          <div className="resumeTitle">
            <h3>Knowledge</h3>
          </div>
          <div className="knowskills">
            <FontAwesomeIcon className="knowIcon" icon={faBolt} />
            <p>Provide for Design and Development</p>
          </div>
          <div className="knowskills">
            <FontAwesomeIcon className="knowIcon" icon={faBolt} />
            <p>Willingness to learn Technologies</p>
          </div>
          <div className="knowskills">
            <FontAwesomeIcon className="knowIcon" icon={faBolt} />
            <p>Problem solving and coordination skills</p>
          </div>
          <div className="knowskills">
            <FontAwesomeIcon className="knowIcon" icon={faBolt} />
            <p>Team Handling / Team Work</p>
          </div>
          <div className="knowskills">
            <FontAwesomeIcon className="knowIcon" icon={faBolt} />
            <p>Flexible with Working Conditions</p>
          </div>
          <div className="knowskills">
            <FontAwesomeIcon className="knowIcon" icon={faBolt} />
            <p>Excellent Listening and Quick Learners</p>
          </div>
        </div>
      </div>
      <div className="certificate">
        <Certifcate
          src={require("../photos/certificate/icpc2021.jpg")}
          alt="not found"
          title="Programming Contest"
          description="The 2021 MET Academy Collegiate Programming Contest"
        />
        <Certifcate
          src={require("../photos/certificate/icpc2021x.jpg")}
          alt="not found"
          title="Programming Contest"
          description="The 2021 ICPC Egyption Collegiate Programming Contest"
        />
        <Certifcate
          src={require("../photos/certificate/icpc2022.jpg")}
          alt="not found"
          title="Programming Contest"
          description="The 2022 ICPC ECPC Qualifications Collegiate Programming Contest"
        />
        <Certifcate
          src={require("../photos/certificate/icpc2021.jpg")}
          alt="not found"
          title="Programming Contest"
          description="The 2022 ICPC Egyption Collegiate Programming Contest"
        />
        <Certifcate
          src={require("../photos/certificate/javascript.jpg")}
          alt="not found"
          title="Javascript Basic"
          description="Javascipt Basic certificate from Hackerrank"
        />
        <Certifcate
          src={require("../photos/certificate/css.jpg")}
          alt="not found"
          title="Css"
          description="Css certificate from Hackerrank"
        />
        <Certifcate
          src={require("../photos/certificate/freelancer.jpg")}
          alt="not found"
          title="Freelancer"
          description="Learn to how use upwork and basic freelanceing"
        />
      </div>
    </div>
    <Footer />
  </div>
);
};

export default Resume;