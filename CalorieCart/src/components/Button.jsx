import PropTypes from "prop-types";

const button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button onClick={onClick} className="button" disabled={disabled}>
        {children}
      </button>
    </>
  );
};

button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

export default button;
