import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
          <Link to={toSite} target="_blank">
            <div className="icon-wrapper center-row text-white">
              <FontAwesomeIcon icon={iconSite} />
            </div>
          </Link>

          <Link to={toGit} target="_blank">
            <div className="icon-wrapper center-row text-white">
              <FontAwesomeIcon icon={iconGit} />
            </div>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
