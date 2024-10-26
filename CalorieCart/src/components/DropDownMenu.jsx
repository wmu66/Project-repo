import PropTypes from "prop-types";

const DropDownMenu = ({
  text,
  options,
  isDefaultSelected,
  setIsDefaultSelected,
}) => {
  return (
    <>
      <select
        className={isDefaultSelected ? "drop-down default" : "drop-down"}
        /* When the default option is selected it is opaque, when the user selects something else then opaque set back to 100% */
        name="drop-down"
        onChange={() => setIsDefaultSelected(false)}
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

DropDownMenu.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDefaultSelected: PropTypes.bool.isRequired,
  setIsDefaultSelected: PropTypes.func.isRequired,
};

export default DropDownMenu;
