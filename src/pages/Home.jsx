import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import HomeLink from "../components/HomeLink";

const Home = () => {
return (
  <div className="homePage">
    <div className="overlay"></div>
    <div className="homeSection">
        <div className="homeImage">
          <img src={require("../photos/myPhoto.jpg")} alt="not found" />
        </div>
        <div className="aboutSection">
          <div className="homeTitle">
            <h2>Bola Nabil</h2>
            <span>I'm a </span>
            <span className="second">Software Engineer</span>
            <p>
              I'm a Frontend Developer. 0 - 1 years of experience. Experienced
              with all dynamic web projects.
            </p>
            <div className="hLinks">
              <HomeLink
                to="https://www.facebook.com/bolanabil404"
                icon={faFacebookF}
              />
              <HomeLink
                to="https://www.youtube.com/@bola-nabil"
                icon={faYoutube}
              />
              <HomeLink
                to="https://www.linkedin.com/in/bolanabil"
                icon={faLinkedinIn}
              />
              <HomeLink
                to="https://www.github.com/bola-nabil"
                icon={faGithub}
              />
            </div>
          </div>
        </div>
      </div>
  </div>
);
};

export default Home;