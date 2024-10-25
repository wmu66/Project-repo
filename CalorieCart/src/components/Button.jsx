import PropTypes from "prop-types";

const button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="button">
        {children}
      </button>
    </>
  );
};

button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default button;
