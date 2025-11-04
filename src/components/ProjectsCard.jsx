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
    <Card className="projectCard shadow-lg">
      <div className="project-img-box">
        <Card.Img variant="top" src={src} alt={alt} className="projectImg" />
      </div>

      <Card.Body className="text-center">
        <Card.Title className="fw-bold projectTitle">{title}</Card.Title>

        <div className="d-flex justify-content-center gap-3 iconsBox">
          <Link to={toSite} target="_blank">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={iconSite} />
            </div>
          </Link>

          <Link to={toGit} target="_blank">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={iconGit} />
            </div>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectsCard;
