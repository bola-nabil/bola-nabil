import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactCard(props) {
  return (
    <>
      <div className={props.className}>
        <div className="contactIcon">
          <FontAwesomeIcon className="icon" icon={props.icon} />
        </div>
        <h2>{props.title}</h2>
        <p className={props.classContact}>{props.description}</p>
      </div>
    </>
  );
}

export default ContactCard;
