import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/layout/Footer/Footer";
import Certifcate from "../../components/Certficate/Certficate";
import SkillsBox from "../../components/Skills/SkillsBox";
import Experience from "../../components/Experience";
import PageTitle from "../../components/ui/PageTitle/PageTitle";
import useData from "../../hooks/useData";
import "./resume.css";

const Resume = () => {
  const {content: data} = useData();

  const certificates = data?.certifcates || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
 
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < certificates?.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    } else {
      setCurrentIndex(0);
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

          {
            data?.experience.map((experience) => (
              <Experience
                key={experience.id}
                title={experience.title}
                year={experience.year}
                company={experience.company}
                description={experience.description}
                />
            ) )
          }

          <SkillsBox title="Frontend Skills" dataLink={data?.skills?.frontend}/>
          <SkillsBox title="Concepts Skills" dataLink={data?.skills?.concepts}/>
          <SkillsBox title="Professional Skills" dataLink={data?.skills?.professional}/>
          <SkillsBox title="Knowledge" dataLink={data?.skills?.knowledges} icon={faBolt}/>

        </div>
        <PageTitle title="Certificates" first="MY " second="Certificates" />

        <div className="certificates center-col">
          <div className="certificate center-row gap-3">
            {displayedCertificates?.map((img) => (
              <Certifcate
                key={img?.id}
                src={require(`../../assets/images/certificate/${img?.image}`)}
                alt={img?.title}
              />
            ))}
          </div>
          <div className="icons center-row fs-5">
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
