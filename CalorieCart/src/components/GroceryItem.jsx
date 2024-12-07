import PropTypes from "prop-types";
import {addToList, removeFromList} from "./Data.jsx";
const GroceryItem = ({ text, data, amount="" }) => {
  function addItem(){
    addToList(text);
  }
  function remItem(){
    removeFromList(text);
  }
  console.log(data)
  return (
    <>
      <div className="grocery-item">
        <p>{amount + " " + text}</p>
        <button onClick={addItem}>+</button>
        <button onClick={remItem}>-</button>
      
      <span className="tooltiptext">
            Calories:{" "}
            <span style={{ color: "var(--accentcolor2)" }}>
              {data["Caloric Value"]}kcal
            </span>{" "}
            <br />
            Fat:{" "}
            <span style={{ color: "var(--accentcolor2)" }}>
              {data["Fat"]}g
            </span>{" "}
            <br />
            Carbs:{" "}
            <span style={{ color: "var(--accentcolor2)" }}>
              {data["Carbohydrates"]}g
            </span>{" "}
            <br />
            Protein:{" "}
            <span style={{ color: "var(--accentcolor2)" }}>
              {data["Protein"]}g
            </span>{" "}
            <br />
            Fiber:{" "}
            <span style={{ color: "var(--accentcolor2)" }}>
              {data["Dietary Fiber"]}g
            </span>{" "}
            <br />
          </span>
        </div>
    </>
  );
};

GroceryItem.propTypes = {
  text: PropTypes.node.isRequired,
  amount: PropTypes.number,
};

export default GroceryItem;
