import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import "./project-card.css";

const ProjectCard = ({
  src,
  alt,
  title,
  toSite,
  iconSite,
  toGit,
  iconGit,
}) => {
  return (
    <Card className="project-card shadow-lg border-none overflow-hidden">
      <div className="project-img-box overflow-hidden">
        <Card.Img variant="top" src={src} alt={alt} className="project-img object-fit-cover" />
      </div>

      <Card.Body className="text-center">
        <Card.Title className="fw-bold project-title">{title}</Card.Title>

        <div className="d-flex justify-content-center gap-3 iconsBox">
          <a href={toSite} target="_blank" rel="noopener noreferrer">
            <div className="icon-wrapper center-row text-white">
              <FontAwesomeIcon icon={iconSite} />
            </div>
          </a>

          <a href={toGit} target="_blank"rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
          >
            <div className="icon-wrapper center-row text-white">
              <FontAwesomeIcon icon={iconGit} />
            </div>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
