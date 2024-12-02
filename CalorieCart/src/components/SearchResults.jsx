import DropDownMenu from "./DropDownMenu";
import SearchResultElement from "./SearchResultElement";
import Arrow from "../assets/arrow.jsx";
import { useState } from "react";
import {getFilteredList} from "./Data.jsx"


const SearchResults = () => {
  const SortOptions = ["Calories", "Fat", "Protein", "Carbohydrates", "Fiber"];
  const [arrowDirection, setArrowDirection] = useState("up");
  const onSortClick = () => {
    setArrowDirection((prevDirection) =>
      prevDirection === "up" ? "down" : "up"
    );
  };
  let filteredList = getFilteredList();
  //placeholder data for milk:
  let items = []
  for (let i in filteredList){
    let item = {
      Calories: filteredList[i]["Caloric Value"],
      Carbohydrates: filteredList[i]["Carbohydrates"],
      Fat: filteredList[i]["Fat"],
      Protein: filteredList[i]["Protein"],
      Fiber: filteredList[i]["Dietary Fiber"],
      name: i,
      img: "https://static.ah.nl/dam/product/AHI_4354523130303337393338?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary",
    };
    items.push(<SearchResultElement data={item} />)
  }

  return (
    <>
      <div className="set-sort">
        <DropDownMenu options={SortOptions} custom_class="small dark" />
        <Arrow custom_class={arrowDirection} onClick={onSortClick} />
      </div>
      <div className="results-grid-div">
        {items}
      </div>
    </>
  );
};

export default SearchResults;
