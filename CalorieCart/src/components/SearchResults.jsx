import DropDownMenu from "./DropDownMenu";
import SearchResultElement from "./SearchResultElement";
import Arrow from "../assets/arrow.svg";
import { useState } from "react";

const SearchResults = () => {
  const SortOptions = ["Calories", "Fat", "Protein", "Carbohydrates", "Fiber"];
  const [arrowDirection, setArrowDirection] = useState("up");
  const onSortClick = () => {
    if (arrowDirection == "up") {
      setArrowDirection("down");
    } else {
      setArrowDirection("up");
    }
  };

  return (
    <>
      <div className="set-sort">
        <DropDownMenu options={SortOptions} custom_class="small dark" />
        <img
          src={Arrow}
          className={"sort-arrow " + arrowDirection}
          onClick={onSortClick}
        />
      </div>
      <div className="results-grid-div">
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
        <SearchResultElement />
      </div>
    </>
  );
};

export default SearchResults;
