import GroceryItem from "./GroceryItem";

const AddedItems = () => {
  //placeholder items for testing
  const items = [
    ["bread", 1],
    ["cheese", 2],
    ["chicken", 5],
    ["cola", 1],
    ["tomato", 5],
  ];
  return (
    <>
      <div className="editor-column-div">
        {items.map(([name, amount]) => (
          <GroceryItem text={name} amount={amount} key={name} />
        ))}
      </div>
    </>
  );
};

export default AddedItems;
