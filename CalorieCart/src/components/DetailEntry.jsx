import Button from "./Button";
import DropDownMenu from "./DropDownMenu";
import AccountCirleIcon from "../assets/account_circle.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailEntry = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/create_list");
  };

  const gender = ["Male", "Female"];

  // States for name, weight, and gender selection
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [isDefaultSelected, setIsDefaultSelected] = useState(true); //checks whether a gender has been picked

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const form_not_filled_in = name == "" || weight == "" || isDefaultSelected; //false if all three form elements have been filled in
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
          onChange={handleNameChange}
        ></input>
        <input
          className="input"
          placeholder="What's your weight?"
          type="number"
          onChange={handleWeightChange}
          step="1"
        ></input>
        <DropDownMenu
          text="What's your gender?"
          options={gender}
          isDefaultSelected={isDefaultSelected}
          setIsDefaultSelected={setIsDefaultSelected}
        ></DropDownMenu>
        <Button onClick={onClick} disabled={form_not_filled_in}>
          Create your first list...
        </Button>
      </div>
    </>
  );
};

export default DetailEntry;