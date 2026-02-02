import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/layout/Footer/Footer";
import Certifcate from "../../components/Certficate/Certficate";
import SkillsBox from "../../components/Skills/SkillsBox";
import Experience from "../../components/experience/Experience";
import PageTitle from "../../components/ui/paget-title/PageTitle";
import useData from "../../hooks/useData";
import {certificatesMap} from "../../utilts/certificatesMap";
import { motion } from "framer-motion";
import {experienceContainer, experienceItem} from "../../utilts/animations";
import "./resume.css";

const Resume = () => {
  const {content: data} = useData();

  const certificates = useMemo(() => {
    return data?.certifcates ?? [];
  }, [data]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
 
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => {
      setItemsPerPage(e.matches ? 1 : 3);
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
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
    } else {
      setCurrentIndex(
        Math.max(certificates.length - itemsPerPage, 0)
      );
    }
  };

  const displayedCertificates = useMemo(
    () => certificates.slice(currentIndex, currentIndex + itemsPerPage),
    [certificates, currentIndex, itemsPerPage]
  );

  return (
    <motion.main
      className="resume"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.4}}
    >
      <div className="container">
        <PageTitle title="Resume" first="MY " second="Resume" />
        <motion.div
          className="resume-section"
          variants={experienceContainer}
          initial="hidden"
          animate="show"
        >
          {
            data?.experience.map((experience) => (
              <motion.div key={experience.id} variants={experienceItem}>
                <Experience
                    key={experience.id}
                    title={experience.title}
                    year={experience.year}
                    company={experience.company}
                    description={experience.description}
                />
                </motion.div>
            ) )
          }

          <SkillsBox title="Frontend Skills" dataLink={data?.skills?.frontend}/>
          <SkillsBox title="Concepts Skills" dataLink={data?.skills?.concepts}/>
          <SkillsBox title="Professional Skills" dataLink={data?.skills?.professional}/>
          <SkillsBox title="Knowledge" dataLink={data?.skills?.knowledges} icon={faBolt}/>

        </motion.div>
        <PageTitle title="Certificates" first="MY " second="Certificates" />

        <div className="certificates center-col">
          <motion.div
            className="certificate center-row gap-3"
            initial={{opacity: 0, x: 30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.4}}
          >
            {displayedCertificates?.map((img) => (
              <Certifcate
                key={img?.id}
                src={certificatesMap[img?.image]}
                alt={img?.title}
              />
            ))}

          </motion.div>
          <div className="icons center-row fs-5">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={handlePrevious}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} onClick={handleNext}>
                <FontAwesomeIcon icon={faAngleRight} />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
};

export default Resume;
