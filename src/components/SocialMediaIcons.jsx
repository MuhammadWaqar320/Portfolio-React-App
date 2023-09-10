import PropTypes from "prop-types";
import "./SocialMediaIcons.css";
const SocialMediaIcons = ({ source, children }) => {
  return (
    <a href={source} rel="noreferrer" target="_blank" className="footer__icon">
      {children}
    </a>
  );
};

SocialMediaIcons.defaultProps = {
  source: "",
  children: <></>,
};
SocialMediaIcons.propTypes = {
  source: PropTypes.string,
  children: PropTypes.element,
};

export default SocialMediaIcons;
