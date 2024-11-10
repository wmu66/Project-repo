import PropTypes from "prop-types";

const GroceryItem = ({ text, amount="" }) => {
  return (
    <>
      <div className="grocery-item">
        <p>{amount + " " + text}</p>
        <button>+</button>
        <button>-</button>
      </div>
    </>
  );
};

GroceryItem.propTypes = {
  text: PropTypes.node.isRequired,
  amount: PropTypes.number,
};

export default GroceryItem;
