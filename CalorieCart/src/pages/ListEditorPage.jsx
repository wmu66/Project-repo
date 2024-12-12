import { useNavigate, useParams } from "react-router-dom";
import "react-range-slider-input/dist/style.css";
import "../styles/list_editor.css";
import AccountEditButton from "../components/AccountEditButton";
import SmallTitle from "../components/SmallTitle.jsx";
import SearchAndFilter from "../components/SearchAndFilter.jsx";
import AddedItems from "../components/Addeditems.jsx";
import Button from "../components/Button.jsx";
import DailyValuesRightSide from "../components/DailyValuesRightSide.jsx";
import SearchResults from "../components/SearchResults.jsx";
import { useState } from "react";
import getList from "../components/Data.jsx";

const ListEditorPage = () => {
  const { listID } = useParams(); //gets the listID from the URL
  const navigate = useNavigate();

  const goBack = () => navigate("/create_list");
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  const items = getList();
  let list_status = "disabled";
  let list_len = 0;

  for (const [key, value] of Object.entries(items)) {
    if ("amount" in value) {
      list_len += value["amount"];
    }
  }
  if (list_len == 0) {
    list_status = "disabled";
  } else {
    list_status = "";
  }

  return (
    <>
      <div onClick={reset} onKeyUp={reset}>
        <div className="header-footer header">
          <div className="header-with-return">
            <Button
              size="medium"
              margin="no-margin"
              background="dark"
              onClick={goBack}
            >
              List creator
            </Button>
            <h1 className="header-text">
              CalorieCart: Create your healthy, nutritious grocery list today!
            </h1>
          </div>
          <AccountEditButton />
        </div>
        <div className="main-content list_editor">
          <div className="filter-div">
            <SmallTitle>Filter and search</SmallTitle>
            <SearchAndFilter />
          </div>

          <div className="search-result-div">
            <SearchResults />
          </div>
          <div className={"grocery-list-div" + " " + list_status}>
            <SmallTitle>Added items</SmallTitle>
            <AddedItems />
          </div>
          <div className={"total-values-div" + " " + list_status}>
            <SmallTitle customClass="wide">
              {" "}
              Daily values of list {listID}{" "}
            </SmallTitle>
            <DailyValuesRightSide />
          </div>
        </div>
        {/* <div className="header-footer footer" /> */}
      </div>
    </>
  );
};

export default ListEditorPage;
