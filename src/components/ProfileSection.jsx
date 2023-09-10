import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <div className="profile-main-section">
      <div className="sub-main-section">
        <div className="image-section">
          <img
            src="https://img.freepik.com/premium-photo/young-businessman-isolated-white_53419-207.jpg"
            className="portfolio-image"
          />
          <div className="name-class">Hello, I am Muhammad Waqar!</div>
        </div>
        <div className="heading">
          A frontend developer
          <br /> Specialised in React
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
