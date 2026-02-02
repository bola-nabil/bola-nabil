import React from "react";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import HomeLink from "../../components/home-link/HomeLink";
import useData  from "../../hooks/useData";
import myPhoto from "../../assets/images/my-photo.jpg";
import { motion } from "framer-motion";
import {container, homeItem} from "../../utilts/animations";
import "./home.css";

const socialIcons = {
  faFacebookF,
   faYoutube,
   faLinkedinIn,
   faGithub
};

const Home = () => {
  const {content: data} = useData();
  return (
    <main className="home-cover position-relative vh-100">
      <div className="overlay position-absolute left-0 top-0 w-100 h-100"></div>
      <div className="home-section position-relative d-flex justify-content-center align-items-center vh-100">
        <motion.div
          className="home-image"
          initial = {{opacity: 0, scale: 0.8}}
          animate = {{opacity: 1, scale: 1}}
          transition={{ duration: 0.6 }}
        >
          <img src={myPhoto} alt="Bola Nabil profile" />
        </motion.div>
        <div className="about-section">
          <div className="home-title">
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2>{data?.name}</h2>
            <span>I'm a </span>
            <span className="second">{data?.jobTitle}</span>
            <p>
              I'm a Frontend Developer. {data?.["experience-years"]} of experience.
              Experienced with all dynamic web projects.
            </p>
          </motion.div>
            <motion.div
              className="h-links d-flex"
              variants={container}
              initial="hidden"
              animate="show"
            >
            {data?.social?.map((link) => (
                <motion.div
                  key={link.id}
                  variants={homeItem}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HomeLink
                    to={link.website}
                    icon={socialIcons[link.icon]}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
