import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeLink(props) {
  return (
    <>
      <li>
        <Link to={props.to} target="_blank">
          <div className="homeIcon">
            <FontAwesomeIcon className="icon" icon={props.icon}/>
          </div>
        </Link>
      </li>
    </>
  );
}

export default HomeLink;
