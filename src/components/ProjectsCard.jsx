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
    <>
      <Card style={{ width: "20rem" }} border="danger" className="project-move">
        <Card.Img variant="top" src={src} alt={alt} />
        <Card.Body>
          <Card.Title className="text-center fw-bold pb-2">{title}</Card.Title>
          <div className="d-flex justify-content-center">
            <Link to={toSite} target="_blank">
              <div className={className}>
                <FontAwesomeIcon className="icon" icon={iconSite} />
              </div>
            </Link>
            <Link to={toGit} target="_blank">
              <div className="projectIcon">
                <FontAwesomeIcon className="icon" icon={iconGit} />
              </div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectsCard;
