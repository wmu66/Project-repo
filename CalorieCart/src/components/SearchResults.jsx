import DropDownMenu from "./DropDownMenu";
import SearchResultElement from "./SearchResultElement";
import Arrow from "../assets/arrow.jsx";
import { useState } from "react";

const SearchResults = () => {
  const SortOptions = ["Calories", "Fat", "Protein", "Carbohydrates", "Fiber"];
  const [arrowDirection, setArrowDirection] = useState("up");
  const onSortClick = () => {
    setArrowDirection((prevDirection) =>
      prevDirection === "up" ? "down" : "up"
    );
  };

  //placeholder data for milk:
  const milkprops = {
    Calories: 460,
    Carbohydrates: 50,
    Fat: 16,
    Protein: 36,
    Fiber: 0,
    name: "Milk 1L 1.5%",
    img: "https://static.ah.nl/dam/product/AHI_4354523130303337393338?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary",
  };

  return (
    <>
      <div className="set-sort">
        <DropDownMenu options={SortOptions} custom_class="small dark" />
        <Arrow custom_class={arrowDirection} onClick={onSortClick} />
      </div>
      <div className="results-grid-div">
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
        <SearchResultElement data={milkprops} />
      </div>
    </>
  );
};

export default SearchResults;
