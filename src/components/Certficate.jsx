
function Certifcate(props) {
    return (
      <>
        <div className="certificateBox">
            <div className="certificateImage">
            <img src={props.src} alt={props.alt} />
            </div>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
      </>
    );
}

export default Certifcate;