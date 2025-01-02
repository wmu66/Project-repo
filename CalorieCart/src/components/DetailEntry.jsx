import Button from "./Button";
import DropDownMenu from "./DropDownMenu";
import AccountCirleIcon from "../assets/account_circle.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setdefaultHealthAmount } from "./Data";

const DetailEntry = () => {
  const navigate = useNavigate();

  const onClick = () => {
    const weight_int = Math.round(parseInt(weight, 10));
    const height_int = Math.round(parseInt(height, 10));
    //let isWeightValid = true;
    //let isHeightValid = true;

    setdefaultHealthAmount(selectedGender)
    if ((weight_int > 0) & (height_int > 0)) {
      navigate("/targets");
    }
  };

  const gender = ["Male", "Female"];

  // States for name, weight, and gender selection
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isDefaultSelected, setIsDefaultSelected] = useState(true); //checks whether a gender has been picked
  const [selectedGender, setSelectedGender] = useState("")
  const [weightValid, setIsWeightValid] = useState(""); // controls weather warning that weight is invalid should be shown
  const [heightValid, setIsHeightValid] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleWeightChange = (event) => {
    const weight = event.target.value;
    const weight_int = Math.round(parseInt(weight, 10));
    setWeight(weight);
    if (weight_int <= 0) {
      setIsWeightValid("active");
    } else {
      setIsWeightValid("inactive");
    }
  };
  const handleHeightCHange = (event) => {
    const height = event.target.value;
    //const height_int = Math.round(parseInt(weight, 10));
    setHeight(height);
    if (height <= 0) {
      setIsHeightValid("active");
    } else {
      setIsHeightValid("inactive");
    }
  };

  const form_not_filled_in =
    name == "" ||
    weight == "" ||
    isDefaultSelected ||
    height == "" ||
    heightValid == "active" ||
    weightValid == "active"; //false if all four form elements have been filled in
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
          placeholder="Username"
          type="text"
          onChange={handleNameChange}
        ></input>
        <input
          className="input"
          placeholder="Weight (kg)"
          type="number"
          onChange={handleWeightChange}
          step="1"
        ></input>
        <div
          className={"alert alert-danger weight " + weightValid}
          role="alert"
        >
          Weight must be positive
        </div>
        <input
          className="input"
          placeholder="Height (cm)"
          type="number"
          onChange={handleHeightCHange}
          step="1"
        ></input>
        <div
          className={"alert alert-danger weight " + heightValid}
          role="alert"
        >
          Height must be positive
        </div>
        <DropDownMenu
          text="Gender"
          options={gender}
          isDefaultSelected={isDefaultSelected}
          setIsDefaultSelected={setIsDefaultSelected}
          selectedOption={selectedGender}
          setSelectedOption={setSelectedGender}
        ></DropDownMenu>
        <Button onClick={onClick} disabled={form_not_filled_in}>
          Create your first list...
        </Button>
      </div>
    </>
  );
};

export default DetailEntry;
