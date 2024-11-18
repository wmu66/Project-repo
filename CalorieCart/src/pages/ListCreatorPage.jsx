import AccountEditButton from "../components/AccountEditButton";
import ListLister from "../components/ListLister";
import "../styles/list_creator.css";

const ListCreatorPage = () => {
  return (
    <>
      <div className="header-footer header">
        <h1 className="header-text">
          CalorieCart: Create your healthy, nutritious grocery list today!
        </h1>
        <AccountEditButton />
      </div>
      <div className="main-content">
        <ListLister />
        <div id="select-or-create-div">
          <h1 id="select-or-create">
            Select or create a new list to begin editing
          </h1>
        </div>
      </div>
      <div className="header-footer footer"></div>
    </>
  );
};

export default ListCreatorPage;
