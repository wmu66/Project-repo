import ListComponent from "./ListComponent";
import { useRef } from "react";

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
          <dialog ref={dialogRef} className="list-creator-dialog">
            <form className="list-creator-form">
              <input
                type="text"
                className="input"
                placeholder="New list name"
              />
              <div className="list-creator-dialog-button-div">
                <button
                  type="submit"
                  formMethod="dialog"
                  className="button small"
                >
                  Cancel
                </button>
                <button type="submit" className="button small">
                  Create
                </button>
              </div>
            </form>
          </dialog>
        </div>
        {list_of_list.map(([name, id]) => (
          <ListComponent list_name={name} key={id} id={id} />
        ))}
      </div>
    </>
  );
};

export default ListLister;
