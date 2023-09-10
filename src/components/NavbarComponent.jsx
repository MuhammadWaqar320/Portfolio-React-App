import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavbarComponent.css";
import { BsStackOverflow } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { PiMediumLogoFill } from "react-icons/pi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import SocialMediaIcons from "./SocialMediaIcons";
const Header = () => {
  const socialMediaIconsArray = [
    {
      id: 1,
      source: "https://mail.google.com/mail",
      child: <MdMail size={26} />,
    },
    {
      id: 2,
      source: "https://github.com/login",
      child: <AiFillGithub size={23} />,
    },
    {
      id: 3,
      source: "https://www.linkedin.com/login",
      child: <AiFillLinkedin size={24} />,
    },
    {
      id: 4,
      source: "https://medium.com/m/signin",
      child: <PiMediumLogoFill size={32} />,
    },
    {
      id: 5,
      source: "https://stackoverflow.com/",
      child: <BsStackOverflow size={20} />,
    },
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          variant="dark"
          expand={expand}
          className="navbar-class"
        >
          <Container fluid>
            <Navbar.Brand className="soical-media-icons">
              {socialMediaIconsArray.map((item) => (
                <SocialMediaIcons key={item.id} source={item.source}>
                  {item.child}
                </SocialMediaIcons>
              ))}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header
                closeButton
                style={{ borderBottom: "2px solid grey" }}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  My Portfolio App
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1"></Nav>
                <Nav>
                  <Nav.Link style={{ color: "white" }}>
                    <a
                      href="#projects"
                      className="menu-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("projectSection");
                      }}
                    >
                      Projects
                    </a>
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }}>
                    <a
                      href="#projects"
                      className="menu-link"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("contactSection");
                      }}
                    >
                      Contact Me
                    </a>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
