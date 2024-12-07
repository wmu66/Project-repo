import GroceryItem from "./GroceryItem";
import getList from "./Data.jsx";

const AddedItems = () => {
  const items = getList();
  let itemsHTML = [];
  for (let i in items){
    if (items[i].amount > 0){
      itemsHTML.push(<GroceryItem text={i} amount={items[i].amount} key={i} data={items[i]} />);
    }
  }
  return (
    <>
      <div className="editor-column-div" id="added-items">
        {itemsHTML}
      </div>
    
    </>
  );
};

export default AddedItems;
