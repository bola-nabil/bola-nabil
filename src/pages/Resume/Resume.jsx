import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/layout/Footer/Footer";
import Certifcate from "../../components/Certficate/Certficate";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience";
import PageTitle from "../../components/ui/PageTitle";
import useData from "../../hooks/useData";
import "./resume.css";

const Resume = () => {
  const data = useData();

  const certificates = data?.certifcates || [];

  console.log(certificates)

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < certificates?.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const displayedCertificates = certificates?.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="resume">
      <div className="container">
        <PageTitle title="Resume" first="MY " second="Resume" />
        <div className="resume-section">
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

          <div className="resume-box">
            <div className="resume-title position-relative">
              <h3>Frontend Skills</h3>
            </div>
            <div className="resume-skills">
              {data?.skills?.frontend?.map((skill) => (
                <Skills
                  key={skill?.id}
                  title={skill?.skillsTitle}
                  status={skill?.skillsCase}
                  style={skill?.skillsCase}
                />
              ))}
            </div>
          </div>

          <div className="resume-box">
            <div className="resume-title">
              <h3>Concepts Skills</h3>
            </div>
            <div className="resume-skills">
              {data?.skills?.concepts?.map((skill) => (
                <Skills
                  key={skill?.id}
                  title={skill?.skillsTitle}
                  status={skill?.skillsCase}
                  style={skill?.skillsCase}
                />
              ))}
            </div>
          </div>

          <div className="resume-box">
            <div className="resume-title">
              <h3>Professional Skills</h3>
            </div>
            <div className="resume-skills">
              {data?.skills?.professional?.map((skill) => (
                <Skills
                  key={skill?.id}
                  title={skill?.skillsTitle}
                  status={skill?.skillsCase}
                  style={skill?.skillsCase}
                />
              ))}
            </div>
          </div>

          <div className="resume-box">
            <div className="resume-title">
              <h3>Knowledge</h3>
            </div>
            {data?.skills?.knowledges?.map((skill) => (
              <div className="know-skills" key={skill?.id}>
                <FontAwesomeIcon className="know-Icon" icon={faBolt} />
                <p>{skill.skillsTitle}</p>
              </div>
            ))}
          </div>
        </div>
        <PageTitle title="Certificates" first="MY " second="Certificates" />

        <div className="certificates d-flex justify-content-center align-items-center flex-column">
          <div className="certificate">
            {displayedCertificates?.map((img) => (
              <Certifcate
                key={img?.id}
                src={require(`../../assets/images/certificate/${img?.image}`)}
                alt={img?.title}
              />
            ))}
          </div>
          <div className="icons d-flex justify-content-center align-items-center fs-5">
            <div onClick={handlePrevious}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div onClick={handleNext}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
