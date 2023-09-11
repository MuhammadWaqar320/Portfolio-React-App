import { useState, useEffect } from "react";
import Header from "../components/NavbarComponent";
import ProfileSection from "../components/ProfileSection";
import FooterComponent from "../components/FooterComponent";
import ProjectComponent from "../components/ProjectComponent";
import ContactUsComponent from "../components/ContactUsComponent";
const Home = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
     {show? <Header />:null}
      <ProfileSection />
      <ProjectComponent />
      <ContactUsComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
