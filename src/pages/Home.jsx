import Header from "../components/NavbarComponent";
import ProfileSection from "../components/ProfileSection";
import FooterComponent from "../components/FooterComponent";
import ProjectComponent from "../components/ProjectComponent";
import ContactUsComponent from "../components/ContactUsComponent";
const Home = () => {
  return (
    <>
      <Header />
      <ProfileSection />
      <ProjectComponent />
      <ContactUsComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
