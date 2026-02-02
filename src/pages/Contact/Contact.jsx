import React, { useState } from "react";
import axios from "axios";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/layout/Footer/Footer";
import PageTitle from "../../components/ui/paget-title/PageTitle";
import ContactCard from "../../components/contact-card/ContactCard";
import  useData from "../../hooks/useData";
import "./contact.css";

const iconMap = {
  location: faLocationDot,
  phone: faPhone,
  email: faEnvelope
}

const Contact = () => {

  const getIcon = (key) => iconMap[key] ?? faEnvelope;
  const {content: data} = useData();

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

        <div className="contact-section">
            {
              data?.contact?.map((contact) => (
                <ContactCard key={contact.id} icon={getIcon(contact.icon)} title={contact.title} content={contact.content} linkPath={contact.link}/>
              ))
            }
        </div>

        <div className="contact-message">
          <div className="message-box">
            <form onSubmit={handleSubmit}>
              <div className="info-form">
                <input
                  type="text"
                  placeholder="Name*"
                  value={name}
                  aria-label="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  aria-label="Your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="subject">
                <input
                  type="text"
                  placeholder="Subject*"
                  value={subject}
                  aria-label="Message subject"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <textarea
                className="w-100"
                placeholder="Message*"
                aria-label="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="submit center-row">
                <input type="submit" value="Send Message" className="fw-bold border-0 center-row rounded-4" />
              </div>
            </form>
            {isSubmitted && (
              <div style={{ color: "green", marginTop: "10px" }}>
                Success! The form was submitted successfully.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
