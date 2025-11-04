import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import PageTitle from "../components/PageTitle";
import ContactCard from "../components/ContactCard";
import profile from "../data/data.json";
import "../styles/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://bola-nabil.github.io/bola-nabil", {
        to: email,
        subject,
        text: message,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="contact">
      <div className="container">
        <PageTitle title="Contact" first="Get In " second="Touch" />

        <div className="contactSection">
          <ContactCard
            className="contactLocation d-flex flex-column justify-content-center align-items-center position-relative p-4"
            icon={faLocationDot}
            title="My Location:"
            description={profile.city}
          />
          <ContactCard
            className="contactPhone d-flex flex-column justify-content-center align-items-center position-relative p-4"
            icon={faPhone}
            title="Phone Number:"
            classContact="phoneNumber"
            description={profile.contact.phone}
          />
          <div className="contactEmail d-flex flex-column justify-content-center align-items-center position-relative p-4">
            <div className="contactIcon">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>
            <h2>Email Address:</h2>
            <Link
              className="mailContact text-decoration-none"
              to={`mailto:${profile.contact.email}`}
            >
              {profile.contact.email}
            </Link>
          </div>
        </div>
        <div className="contactMessage">
          <div className="messageBox">
            <form onSubmit={handleSubmit}>
              <div className="infoForm">
                <input
                  type="text"
                  placeholder="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="subject">
                <input
                  type="text"
                  placeholder="Subject*"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <textarea
                className="w-100"
                placeholder="Message*"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="submit">
                <input type="submit" value="Send Message" />
              </div>
            </form>
            {isSubmitted && (
              <div style={{ color: "green", marginTop: "10px" }}>
                Success! The form was submitted successfully.
              </div>
            )}
          </div>
          <div className="mapBox">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d258.44339217918514!2d30.90221538442333!3d29.36484403875814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1699171481734!5m2!1sar!2seg"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
