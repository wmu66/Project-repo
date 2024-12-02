import PropTypes from "prop-types";
import {addToList} from "./Data.jsx";

const SearchResultElement = ({ data }) => {
  function addList(){
    addToList(data.name);
  }
  return (
    <>
      <div onClick={addList}>
        <div className="search-result-element">
          <div className="image-container">
            <img src={data["img"]} />
          </div>
          <h3>{data["name"]}</h3>
          <p>
            Calories{" "}
            <span style={{ color: "var(--accentcolor2)" }}>
              {data["Calories"]}kcal
            </span>
          </p>
          <div className="buttons-div"></div>
          <span className="tooltiptext">
            Calories:{" "}
            <span style={{ color: "var(--accentcolor2)" }}>
              {data["Calories"]}kcal
            </span>{" "}
            <br />
            Fat:{" "}
            <span style={{ color: "var(--accentcolor2)" }}>
              {data["Fat"]}g
            </span>{" "}
            <br />
            Carbohydrates:{" "}
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
              {data["Fiber"]}g
            </span>{" "}
            <br />
          </span>
        </div>
      </div>
    </>
  );
};

SearchResultElement.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    Calories: PropTypes.number.isRequired,
    Fat: PropTypes.number.isRequired,
    Carbohydrates: PropTypes.number.isRequired,
    Protein: PropTypes.number.isRequired,
    Fiber: PropTypes.number.isRequired,
  }).isRequired,
};

export default SearchResultElement;
