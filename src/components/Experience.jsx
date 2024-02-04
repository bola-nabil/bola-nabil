function Experience(props) {
    return (
      <>
        <div className="resumeBox">
          <div className="resumeTitle">
            <h3>{props.title}</h3>
          </div>
          <div className="resumeContent">
            <div className="resumeInside">
              <div className="year">
                <p>{props.year}</p>
              </div>
              <h3>{props.company}</h3>
              <h3>{props.description}</h3>
            </div>
          </div>
        </div>
      </>
    );
}

export default Experience;