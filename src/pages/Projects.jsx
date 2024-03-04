import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';
import PageTitle from '../components/PageTitle';
import ProjectsCard from '../components/ProjectsCard';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';

function Projects () {

    const projectsData = [
      {
        title: "Interviews Website",
        liveLink: "https://bola-nabil.github.io/Interviews/",
        gitLink: "https://github.com/bola-nabil/Interviews/",
        imgUrl: "interviews.jpg",
      },
      {
        title: "My Protfolio",
        liveLink: "https://bola-nabil.github.io/bola-nabil/",
        gitLink: "https://github.com/bola-nabil/bola-nabil.git",
        imgUrl: "myWebsite.jpg",
      },
      {
        title: "Ibsar",
        liveLink: "http://ebsar.website/",
        gitLink: "https://github.com/bola-nabil/Ibsar.git",
        imgUrl: "ibsar.jpg",
      },
      {
        title: "Kasper",
        liveLink: "https://bola-nabil.github.io/Kasper/",
        gitLink: "https://github.com/bola-nabil/Kasper.git",
        imgUrl: "kasper.jpg",
      },
      {
        title: "Dashboard",
        liveLink: "https://bola-nabil.github.io/Dashboard/",
        gitLink: "https://github.com/bola-nabil/Dashboard.git/",
        imgUrl: "dashboard.jpg",
      },
      {
        title: "Protfolio Design",
        liveLink: "https://bola-nabil.github.io/protfolio/",
        gitLink: "https://github.com/bola-nabil/protfolio.git/",
        imgUrl: "protofilo.jpg",
      },
      {
        title: "Leon",
        liveLink: "https://bola-nabil.github.io/leon/",
        gitLink: "https://github.com/bola-nabil/leon.git",
        imgUrl: "leon.jpg",
      },
      {
        title: "Calculator",
        liveLink: "https://github.com/bola-nabil/calculator.git/",
        gitLink: "https://github.com/bola-nabil/calculator.git/",
        imgUrl: "calculator_project.jpg",
      },
      {
        title: "Bank System Managment",
        liveLink: "https://github.com/bola-nabil/Bank-System.git/",
        gitLink: "https://github.com/bola-nabil/Bank-System.git/",
        imgUrl: "bankSystem.jpg",
      },
      {
        title: "Leetcode Problem Solutions",
        liveLink: "https://github.com/bola-nabil/leetcode.git/",
        gitLink: "https://github.com/bola-nabil/leetcode.git/",
        imgUrl: "leetcode.jpg",
      },
      {
        title: "Codeforces Problem Solutions",
        liveLink: "https://github.com/bola-nabil/codeforces.git/",
        gitLink: "https://github.com/bola-nabil/codeforces.git/",
        imgUrl: "codeforces.jpg",
      },
      {
        title: "Atcoder Problem Solutions",
        liveLink: "https://github.com/bola-nabil/atcoder.git",
        gitLink: "https://github.com/bola-nabil/atcoder.git",
        imgUrl: "atcoder.jpg",
      },
    ];
      const pageSize = 8;
      const [currentPage, setCurrentPage] = useState(0);
      const totalPages = Math.ceil(projectsData.length / pageSize);
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
            {projectsData.map((project, index) => (
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
            )).slice(startIndex,endIndex)}
          </Row>
          <div className="mt-4 text-center">
              <button onClick={prevPage} disabled={currentPage === 0} className='btn btn-danger'>&lt;</button>
              <span className='ps-3 pe-3'>{currentPage + 1}</span>
              <button onClick={nextPage} disabled={currentPage === totalPages - 1} className='btn btn-danger'>&gt;</button>
        </div>
      </div>
        </div>
        <Footer />
      </div>
    );
};

export default Projects;