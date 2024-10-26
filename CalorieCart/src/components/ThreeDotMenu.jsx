import ThreeDotSVG from "../assets/three-dot.svg";
import PropTypes from "prop-types";

const ThreeDotMenu = ({ options }) => {
  return (
    <>
      <div className="three-dot-menu">
        <button className="three-dot-btn">
          <img
            src={ThreeDotSVG}
            alt="three-dot"
            className="three-dot-image"
          ></img>
        </button>
        <div className="three-dot-content">
          {options.map((option) => (
            <button className="three-dot-option" key={option} value={option}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

ThreeDotMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreeDotMenu;
