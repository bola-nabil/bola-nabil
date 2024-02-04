function Skills(props) {
  return (
    <>
          <div className="skill">
            <h3>
              {props.title}
              <span>{props.case}</span>
            </h3>
            <div className="the-progress">
              <span style={props.style}></span>
            </div>
          </div>
    </>
  );
}

export default Skills;
