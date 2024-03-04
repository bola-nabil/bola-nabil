import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ProjectsCard(props) {
  return (
    <>
      <Card style={{ width: "20rem" }} border="danger" className="project-move">
        <Card.Img variant="top" src={props.src} alt={props.alt} />
        <Card.Body>
          <Card.Title className="text-center fw-bold pb-2">{props.title}</Card.Title>
          <div className="d-flex justify-content-center">
            <Link to={props.toSite} target="_blank">
              <div className={props.className}>
                <FontAwesomeIcon className="icon" icon={props.iconSite} />
              </div>
            </Link>
            <Link to={props.toGit} target="_blank">
              <div className="projectIcon">
                <FontAwesomeIcon className="icon" icon={props.iconGit} />
              </div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectsCard;
