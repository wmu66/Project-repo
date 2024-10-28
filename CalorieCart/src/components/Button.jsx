import PropTypes from "prop-types";

const button = ({
  children,
  onClick,
  disabled,
  size = "",
  background = "",
  margin = "",
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={"button " + size + " " + background + " " + margin}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.string, //can be small (w 80px) or medium (w200px)
  background: PropTypes.string, //can be dark, and then background color will be set to accent color 1, text color to white (hover remains)
  no_right_margin: PropTypes.string, //can be "no-margin" to remove the default margins
};

export default button;
