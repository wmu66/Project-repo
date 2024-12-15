import ListComponent from "./ListComponent";
import { useRef } from "react";
import Dialog from "./Dialog";


const ListLister = () => {
  const list_of_list = [
    //placeholder for testing
    ["List 1", "1"],
    ["List 2", "2"],
    ["List 3", "3"],
  ];

  const dialogRef = useRef();

  return (
    <>
      <div id="list-lister">
        <div id="list-lister-title-div">
          <h2 id="your-lists">Your lists</h2>
          <button
            onClick={() => dialogRef.current?.showModal()}
            id="new-list-button"
          >
            +
          </button>
          <Dialog
            ref={dialogRef}
            text="New list name"
            ok_button_text="Create"
          />
        </div>
        {list_of_list.map(([name, id]) => (
          <ListComponent list_name={name} key={id} id={id} />
        ))}
      </div>
    </>
  );
};

export default ListLister;
