import React, { useState, useEffect } from "react";
import useData  from "../../hooks/useData";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/layout/Footer/Footer";
import PageTitle from "../../components/ui/paget-title/PageTitle";
import ProjectCard from "../../components/project-card/ProjectCard";
import { Row, Col } from "react-bootstrap";
import {projectsMap} from "../../utilts/projectsMap";

const Projects = () => {
    const {content: data} = useData();

  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(0);

  const projects = data?.projects ?? [];
  const totalPages = Math.ceil(projects.length / pageSize);

    useEffect(() => {
      setCurrentPage(0);
  }, [projects.length]);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;


  return (
    <main className="projects">
      <div className="container">
        <PageTitle title="Projects" first="My " second="Projects" />
        <div className="mt-4">
          <Row xs="1" md="2" lg="3">
            {data?.projects
              ?.slice(startIndex, endIndex)
              .map((project) => (
                <Col
                  key={project.id}
                  className="mt-4 d-flex justify-content-center align-items-center"
                >
                  <ProjectCard
                    src={projectsMap[project.imgUrl]}
                    alt="not found"
                    title={project.title}
                    toSite={project.liveLink}
                    iconSite={faLink}
                    className="project-icon center-row"
                    toGit={project.gitLink}
                    iconGit={faGithub}
                  />
                </Col>
              ))
            }
          </Row>
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
    </main>
  );
};

export default Projects;
