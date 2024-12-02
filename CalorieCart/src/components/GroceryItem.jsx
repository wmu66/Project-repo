import PropTypes from "prop-types";
import {addToList, removeFromList} from "./Data.jsx";
const GroceryItem = ({ text, amount="" }) => {
  function addItem(){
    addToList(text);
  }
  function remItem(){
    removeFromList(text);
  }
  return (
    <>
      <div className="grocery-item">
        <p>{amount + " " + text}</p>
        <button onClick={addItem}>+</button>
        <button onClick={remItem}>-</button>
      </div>
    </>
  );
};

GroceryItem.propTypes = {
  text: PropTypes.node.isRequired,
  amount: PropTypes.number,
};

export default GroceryItem;
