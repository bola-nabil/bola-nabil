import { Link } from "react-router-dom";

function Information(props) {
  return (
    <>
      <li>
        <label>{props.title}</label>
        <span className={`desInfo ${props.className}`}>
          <Link
            className="infoLink"
            to={props.to}
            target="_blank"
          >
            {props.LinkTitle}
          </Link>
          {props.info}
        </span>
      </li>
    </>
  );
}

export default Information;
