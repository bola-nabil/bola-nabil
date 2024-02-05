import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavLink(props) {
  return (
    <>
      <li
        onClick={props.onClick}
        className={props.active}
      >
        <Link
          onClick={props.showMenuClick}
          to={props.to}
          className="homeLinks"
        >
          <div className="homeIcon">
            <FontAwesomeIcon icon={props.icon}/>
          </div>
          {props.title}
        </Link>
      </li>
    </>
  );
}

export default NavLink;
