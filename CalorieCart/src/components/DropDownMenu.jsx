import PropTypes from "prop-types";
import { useState } from "react";

const DropDownMenu = ({ text, options }) => {
  const [isDefaultSelected, setIsDefaultSelected] = useState(true);

  return (
    <>
      <select
        className={isDefaultSelected ? "drop-down default" : "drop-down"}
        /* When the default option is selected it is opaque, when the user selects something else then opaque set back to 100% */
        name="drop-down"
        onClick={() => setIsDefaultSelected(false)}
      >
        <option className="drop-down-option-default" disabled selected hidden>
          {text}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="drop-down-option">
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDownMenu;

DropDownMenu.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
