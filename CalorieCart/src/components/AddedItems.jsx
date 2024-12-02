import GroceryItem from "./GroceryItem";
import getList from "./Data.jsx";

const AddedItems = () => {
  const items = getList();
  console.log(items);
  let itemsHTML = [];
  for (let i in items){
    if (items[i].amount > 0){
      itemsHTML.push(<GroceryItem text={i} amount={items[i].amount} key={i} />);
    }
  }
  return (
    <>
      <div className="editor-column-div">
        {itemsHTML}
      </div>
    </>
  );
};

export default AddedItems;
