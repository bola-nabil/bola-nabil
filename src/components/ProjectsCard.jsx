import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProjectsCard = ({
  src,
  alt,
  title,
  toSite,
  className,
  iconSite,
  toGit,
  iconGit,
}) => {
  return (
    <Card className="project-card shadow-lg">
      <div className="project-img-box">
        <Card.Img variant="top" src={src} alt={alt} className="project-img" />
      </div>

      <Card.Body className="text-center">
        <Card.Title className="fw-bold project-title">{title}</Card.Title>

        <div className="d-flex justify-content-center gap-3 iconsBox">
          <Link to={toSite} target="_blank">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={iconSite} />
            </div>
          </Link>

          <Link to={toGit} target="_blank">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={iconGit} />
            </div>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectsCard;
