function PageTitle(props) {
    return (
      <>
        <div className="boxTitle">
          <div className="title">
            <h2>{props.title}</h2>
            <div className="insideText">
              <span className="first">{props.first} </span>
              <span className="second">{props.second}</span>
            </div>
          </div>
        </div>
      </>
    );
}

export default PageTitle;