import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ProjectsCard(props) {
  return (
    <>
      <div className="projectBox">
        <div className="projectImage">
            <img src={props.src} alt={props.alt}/>
        </div>
        <div className="projectTitle">
          <h2>{props.title}</h2>
        </div>
        <div className="projectLinks">
          <Link to={props.toSite} target="_blank">
            <div className={props.className}>
              <FontAwesomeIcon className="icon" icon={props.iconSite}/>
            </div>
          </Link>
          <Link to={props.toGit} target="_blank">
            <div className="projectIcon">
              <FontAwesomeIcon className="icon" icon={props.iconGit} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
