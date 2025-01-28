import React, { useState } from "react";
import profile from "../data/data.json";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";
import PageTitle from "../components/PageTitle";
import ProjectsCard from "../components/ProjectsCard";
import { Row, Col } from "react-bootstrap";
import "../styles/projects.css";

const Projects = () => {
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(profile.projects.length / pageSize);
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="projects">
      <div className="container">
        <PageTitle title="Projects" first="My " second="Projects" />
        <div className="mt-4">
          <Row sm="2" lg="3">
            {profile.projects
              .map((project, index) => (
                <Col
                  key={index}
                  className="mt-4 d-flex justify-content-center align-items-center"
                >
                  <ProjectsCard
                    src={require(`../photos/projects/${project.imgUrl}`)}
                    alt="not found"
                    title={project.title}
                    toSite={project.liveLink}
                    iconSite={faLink}
                    className="projectIcon"
                    toGit={project.gitLink}
                    iconGit={faGithub}
                  />
                </Col>
              ))
              .slice(startIndex, endIndex)}
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
    </div>
  );
};

export default Projects;
