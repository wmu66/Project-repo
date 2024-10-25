import Button from "./Button";
import DropDownMenu from "./DropDownMenu";
import AccountCirleIcon from "../assets/account_circle.svg";

const DetailEntry = () => {
  const onClick = () => {
    console.log("I was clicked");
  };

  let gender = ["Male", "Female"];

  return (
    <>
      <div className="detail-entry">
        <img
          src={AccountCirleIcon}
          alt="account icon"
          id="account-circle"
        ></img>
        <h1 id="welcome-message">Welcome! Who are you?</h1>
        <input
          className="input"
          placeholder="What's your name?"
          type="text"
        ></input>
        <input
          className="input"
          placeholder="What's your weight?"
          type="number"
          step="1"
        ></input>
        <DropDownMenu
          text="What's your gender?"
          options={gender}
        ></DropDownMenu>
        <Button onClick={onClick}>Create your first list...</Button>
      </div>
    </>
  );
};

export default DetailEntry;
