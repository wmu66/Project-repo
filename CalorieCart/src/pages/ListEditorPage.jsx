import { useParams } from "react-router-dom";
import "react-range-slider-input/dist/style.css";
import "../styles/list_editor.css";
import AccountEditButton from "../components/AccountEditButton";
import SmallTitle from "../components/SmallTitle.jsx";
import SearchAndFilter from "../components/SearchAndFilter.jsx";
import AddedItems from "../components/Addeditems.jsx";

const ListEditorPage = () => {
  const { listID } = useParams(); //gets the listID from the URL

  return (
    <>
      <div className="header-footer header">
        <h1 className="header-text">
          Create your healthy, nutritious grocery list today!
        </h1>
        <AccountEditButton />
      </div>
      <div className="main-content list_editor">
        <div className="filter-div">
          <SmallTitle>{listID}</SmallTitle>
          <SearchAndFilter />
        </div>
        <div className="grocery-list-div">
          <SmallTitle>Added items</SmallTitle>
          <AddedItems />
        </div>
        <div className="search-result-div">Search result div</div>
        <div className="total-values-div">
          <SmallTitle>Daily values</SmallTitle>
        </div>
      </div>
      <div className="header-footer footer" />
    </>
  );
};

export default ListEditorPage;
