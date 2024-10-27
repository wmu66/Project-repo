import PropTypes from "prop-types";

const button = ({
  children,
  onClick,
  disabled,
  size = "",
  background = "",
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={"button " + size + " " + background}
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
};

export default button;
