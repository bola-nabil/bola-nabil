import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../css/Nav.css";

function NavBar() {
    const [activeItem, setActiveItem] = useState("bola-nabil");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    }

    const LinkData = [
      {
        linkPath: "/",
        active: "bola-nabil",
        iconLink: faHouse,
        title: "Home",
      },
      {
        linkPath: "/about",
        active: "about",
        iconLink: faUser,
        title: "About",
      },
      {
        linkPath: "/resume",
        active: "resume",
        iconLink: faFile,
        title: "Resume",
      },
      {
        linkPath: "/projects",
        active: "projects",
        iconLink: faListCheck,
        title: "Projects",
      },
      {
        linkPath: "/contact",
        active: "contact",
        iconLink: faPhone,
        title: "Contact",
      },
    ];

    return (
      <Navbar bg="dark" data-bs-theme="dark" className="nav-size" fixed="top">
        <Container>
          <Link
            to="/"
            className={`nav-home nav-title ${
              activeItem === "bola-nabil" ? "active-home" : ""
            }`}
            onClick={() => {
              handleItemClick("bola-nabil");
            }}
          >
            bola-nabil
          </Link>
          <button onClick={handleShow} className="toggle canvas-control">
            <span className="menu-icon">&#9776;</span>
          </button>
          <Nav className="link-control me-auto links-move">
            {LinkData.map((data, index) => (
              <Link
                key={index}
                to={data.linkPath}
                className={`nav-home ps-5 ${
                  activeItem === data.active ? "active-home" : ""
                }`}
                onClick={() => {
                  handleItemClick(data.active);
                }}
              >
                <div className="homeIcon">
                  <FontAwesomeIcon icon={data.iconLink} className="pe-2"/>
                </div>
                {data.title}
              </Link>
            ))}
          </Nav>
        </Container>
        <Offcanvas
          show={show}
          onHide={handleClose}
          className="canvas-control"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-dark">
              bola-nabil
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-dark">
            <Nav className="justify-content-end flex-grow-1 pe-3 text-light">
              {LinkData.map((data, index) => (
                <Link
                  key={index}
                  to={data.linkPath}
                  className={`nav ${
                    activeItem === data.active ? "active" : ""
                  }`}
                  onClick={() => {
                    handleItemClick(data.active);
                    handleClose();
                  }}
                >
                  <div className="homeIcon">
                    <FontAwesomeIcon icon={data.iconLink}  className="pe-2"/>
                  </div>
                  {data.title}
                </Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    );
}

export default NavBar;
