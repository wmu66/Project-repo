import PropTypes from "prop-types";

const DropDownMenu = ({
  text,
  options,
  isDefaultSelected,
  setIsDefaultSelected,
  custom_class,
}) => {
  //checking whether text has been provided. If yes, then text as a label will be written on the drop down menu, but will not be selectable.
  //If no text is provided then the first element of the array is selected, and is a valid option

  const selectedOption = text || options[0]; //if text is provided than it is selected
  const displayOptions = text ? options : options.slice(1); //if no text is provided then the first element of the array is selected by default, so only need to map the remaining array

  return (
    <>
      <select
        className={
          isDefaultSelected
            ? "drop-down default " + custom_class
            : "drop-down " + custom_class
        }
        /* When the default option is selected it is opaque, when the user selects something else then opaque set back to 100% */
        name="drop-down"
        onChange={
          setIsDefaultSelected ? () => setIsDefaultSelected(false) : null
        }
      >
        {text ? (
          <option
            className={"drop-down-option-default "}
            disabled
            selected
            hidden
          >
            {text}
          </option>
        ) : (
          <option selected>{selectedOption}</option>
        )}
        {displayOptions.map((option) => (
          <option key={option} value={option} className="drop-down-option">
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

DropDownMenu.propTypes = {
  text: PropTypes.string, // if text is not provided then the first element of the array is autoselected
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDefaultSelected: PropTypes.bool,
  setIsDefaultSelected: PropTypes.func,
  custom_class: PropTypes.string,
};

export default DropDownMenu;
