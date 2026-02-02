import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";
import PageTitle from "../../components/ui/paget-title/PageTitle";
import AboutMe from "../../components/about-me/AboutMe";
import  useData from "../../hooks/useData";
import myPhoto from "../../assets/images/my-photo.jpg";
import { motion } from "framer-motion";
import {container, aboutItem} from "../../utilts/animations";
import "./about.css";

const About = () => {
  const {content: data} = useData();

  return (
    <>
      <main className="about">
        <div className="container">
          <PageTitle title="About" first="About " second="Me" />
          <div className="about-section center-row">
            <motion.figure
                className="box-image"
                initial={{opacity: 0, x: -40}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.6}}
            >
                <img src={myPhoto} alt="Bola Nabil profile" className="object-fit-cover rounded-3" />
            </motion.figure>
            <motion.div
              className="about-box rounded-3"
              initial={{opacity: 0, x: 40}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: 0.2 }}
            >
              <div className="title p-4 fs-5 text-secondary">
                <p>
                  Hi! My name is bola nabil. I graduated from the Department of
                  Computer Science in 2023. I love the field of programming very
                  much. I have participated in many programming competitions
                  such as ECPC.
                </p>
                <p>
                  I currently work as a front-end software developer and have
                  some experience there. My goal is to become professional in
                  the field of software and to develop software that benefits
                  society.
                </p>
                <p>
                  Get the bundle and get lifetime support and one year updates.
                  I am available for freelance work. Connect with me via my
                  account.
                </p>
              </div>
              <div className="cv-box">
                <Link className="cv fw-bold text-uppercase center-row rounded-3" to={data?.cv?.frontend} target="_blank"  rel="noopener noreferrer">
                  Show Cv
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
              className="about-info rounded-3"
              variants={container}
              initial="hidden"
              animate="show"
          >
            {data?.["about-me"]?.map((info) => (
                <motion.div key={info.id} variants={aboutItem}>
                  <AboutMe
                    title={info.title}
                    content={info.content}
                    linkPath={info.link}
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;