import React, { Component } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';
import PageTitle from '../components/PageTitle';
import ProjectsCard from '../components/ProjectsCard';

class Projects extends Component {
render() { 
    return (
      <div className="projects">
        <div className="container">
          <PageTitle title="Projects" first="My " second="Projects" />
          <div className="projectSection">
            <ProjectsCard
              src={require("../photos/projects/dashboard.jpg")}
              alt="not found"
              title="Dashboard Project"
              toSite="https://bola-nabil.github.io/Dashboard/"
              iconSite={faLink}
              className="projectIcon"
              toGit="https://github.com/bola-nabil/Dashboard.git/"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/ibsar.jpg")}
              alt="not found"
              title="Ibsar Project"
              toSite="http://ebsar.website/"
              iconSite={faLink}
              className="projectIcon"
              toGit="https://github.com/bola-nabil/Ibsar.git"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/protofilo.jpg")}
              alt="not found"
              title="Protfolio Project"
              toSite="https://bola-nabil.github.io/protfolio/"
              iconSite={faLink}
              className="projectIcon"
              toGit="https://github.com/bola-nabil/protfolio.git/"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/calculator_project.jpg")}
              alt="not found"
              title="Landing Page Project"
              toSite="https://bola-nabil.github.io/landing-page/"
              iconSite={faLink}
              className="projectIcon"
              toGit="https://github.com/bola-nabil/landing-page.git/"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/myWebsite.jpg")}
              alt="not found"
              title="My Protfolio Project"
              toSite="https://bola-nabil.github.io/bola-nabil/"
              iconSite={faLink}
              className="projectIcon"
              toGit="https://github.com/bola-nabil/bola-nabil.git"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/kasper.jpg")}
              alt="not found"
              title="Kasper Project"
              toSite="https://bola-nabil.github.io/Kasper/"
              iconSite={faLink}
              className="projectIcon"
              toGit="https://github.com/bola-nabil/Kasper.git"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/leon.jpg")}
              alt="not found"
              title="Leon Project"
              toSite="https://bola-nabil.github.io/leon/"
              iconSite={faLink}
              className="projectIcon"
              toGit="https://github.com/bola-nabil/leon.git"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/calculator_project.jpg")}
              alt="not found"
              title="Calculator Project"
              toGit="https://github.com/bola-nabil/calculator.git/"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/bankSystem.jpg")}
              alt="not found"
              title="Bank System Project"
              toGit="https://github.com/bola-nabil/Bank-System.git/"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/leetcode.jpg")}
              alt="not found"
              title="Leetcode Problem Solutions"
              toGit="https://github.com/bola-nabil/leetcode.git/"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/codeforces.jpg")}
              alt="not found"
              title="Codeforces Problem Solutions"
              toGit="https://github.com/bola-nabil/codeforces.git/"
              iconGit={faGithub}
            />

            <ProjectsCard
              src={require("../photos/projects/atcoder.jpg")}
              alt="not found"
              title="Atcoder Problem Solutions"
              toGit="https://github.com/bola-nabil/atcoder.git"
              iconGit={faGithub}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
}
};

export default Projects;