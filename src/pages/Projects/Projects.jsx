import React, { useState, useEffect, useRef, useMemo } from "react";
import useData  from "../../hooks/useData";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/layout/Footer/Footer";
import PageTitle from "../../components/ui/paget-title/PageTitle";
import ProjectCard from "../../components/project-card/ProjectCard";
import { Row, Col } from "react-bootstrap";
import {projectsMap} from "../../utilts/projectsMap";
import Loading from "../../components/ui/loading/Loading";
import { motion } from "framer-motion";
import {cardVariants, gridVariants} from "../../utilts/animations";

const Projects = () => {
  const {content: data, loading} = useData();

  const topRef = useRef(null);


  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(0);

  const projects = useMemo(() => {
    return [...(data?.projects ?? [])].reverse();
  }, [data?.projects]);

  const totalPages = Math.ceil(projects.length / pageSize);

    useEffect(() => {
      setCurrentPage(0);
  }, [projects.length]);


      useEffect(() => {
      topRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [currentPage]);


  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;


  if(loading) return <Loading />

  return (
    <motion.main
        className="projects"
        ref={topRef}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4}}
    >
      <div className="container">
        <PageTitle title="Projects" first="My " second="Projects" />
        <div className="mt-4">
          <motion.div
              variants={gridVariants}
              initial="hidden"
              animate="show"
              key={currentPage}
          >
          <Row xs="1" md="2" lg="3">
            {projects
              ?.slice(startIndex, endIndex)
              .map((project) => (
                <Col
                  key={project.id}
                  className="mt-4 d-flex justify-content-center align-items-center"
                >
                  <motion.div variants={cardVariants}>
                  <ProjectCard
                      src={projectsMap[project.imgUrl]}
                      alt={project.title}
                      title={project.title}
                      toSite={project.liveLink}
                      iconSite={faLink}
                      className="project-icon center-row"
                      toGit={project.gitLink}
                      iconGit={faGithub}
                    />

                  </motion.div>
                </Col>
              ))
            }
          </Row>

          </motion.div>
          <div className="mt-4 text-center">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="btn btn-danger"
            >
              &lt;
            </button>
            <span className="ps-3 pe-3">{currentPage + 1}</span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="btn btn-danger"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </motion.main>
  );
};

export default Projects;
