import PropTypes from "prop-types";
import { addToList, removeFromList } from "./Data.jsx";

const ContributingItem = ({ text, value, measurement, amount }) => {
  function addItem() {
    addToList(text);
  }
  function remItem() {
    removeFromList(text);
  }

  return (
    <div className="grocery-item contributing-item">
      <div>
        <p>{amount + " " + text}</p>
        <span style={{ color: "var(--accentcolor2)" }}>
          {value + measurement + "/1"}
        </span>
      </div>
      <div className="buttons">
        <button onClick={addItem}>+</button>
        <button onClick={remItem}>-</button>
      </div>
    </div>
  );
};

ContributingItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number,
  measurement: PropTypes.string.isRequired,
  amount: PropTypes.number,
};

export default ContributingItem;
