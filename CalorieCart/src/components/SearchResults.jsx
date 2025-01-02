import DropDownMenu from "./DropDownMenu";
import SearchResultElement from "./SearchResultElement";
import Arrow from "../assets/arrow.jsx";
import { useState } from "react";
import {getFilteredList} from "./Data.jsx";



const SearchResults = () => {
  const SortOptions = ["Calories", "Fat", "Protein", "Carbohydrates", "Fiber", "Sugars"];
  const [selectedSortingOption, setSelectedSortingOption] = useState(SortOptions[0])


  const [arrowDirection, setArrowDirection] = useState("down");
  const onSortClick = () => {
    setArrowDirection((prevDirection) =>
      prevDirection === "up" ? "down" : "up"
    );
  };
  let filteredList = getFilteredList();
  //placeholder data for milk:
  let items = []
  let sortItem = selectedSortingOption
  for (let i in filteredList){
    let item = {
      Calories: filteredList[i]["Caloric Value"],
      Carbohydrates: filteredList[i]["Carbohydrates"],
      Fat: filteredList[i]["Fat"],
      Protein: filteredList[i]["Protein"],
      Fiber: filteredList[i]["Dietary Fiber"],
      Sugars: filteredList[i]["Sugars"],
      name: i
    };
    items.push(item)
  }
  if (arrowDirection === "up"){
    items.sort((a, b) => {return a[sortItem]-b[sortItem]})
  } else {
    items.sort((a, b) => {return b[sortItem]-a[sortItem]})
  }
  return (
    <>
      <div className="set-sort">
        <DropDownMenu options={SortOptions} custom_class="small dark" selectedOption={selectedSortingOption} setSelectedOption={setSelectedSortingOption} />
        <Arrow custom_class={arrowDirection} onClick={onSortClick} />
      </div>
      <div className="results-grid-div">
        {items.map((a) => {return <SearchResultElement data={a} sortingCategory={selectedSortingOption}/>})}
      </div>
    </>
  );
};

export default SearchResults;
