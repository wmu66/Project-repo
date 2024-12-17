import chevron from "../assets/chevron.svg";
import x_icon from "../assets/x_icon.svg";
import { useState } from "react";
import DailyValueBar from "./DailyValueBar";
import Button from "./Button";
import PropTypes from "prop-types";
import { resetSlider, updateSlider } from "./Data";
import { useNavigate, useParams } from "react-router-dom";

const ExpandingCard = ({
  nutrition_name,
  nutrition_measurement,
  amount,
  healthy_amount,
  children,
}) => {
  const [open, setOpen] = useState(""); //on default closed
  const { listID } = useParams(); //gets the listID from the URL
  const navigate = useNavigate();
  const onClick = () => {
    if (!open) {
      setOpen("open");
    } else {
      setOpen("");
    }
  };

  const slider_mid_points = {
    "Caloric Value": 250,
    Fat: 25,
    Protein: 25,
    Carbohydrates: 25,
    "Dietary Fiber": 25,
    Sugars: 25,
  };

  const on_improvement_click = () => {
    resetSlider();

    let nutrition = nutrition_name;
    //have to do some changes to the nutrition name so that they match up with the data component
    if (nutrition == "Calories") {
      nutrition = "Caloric Value";
    } else if (nutrition == "Fats") {
      nutrition = "Fat";
    } else if (nutrition == "Fiber") {
      nutrition = "Dietary Fiber";
    }

    if (amount > healthy_amount) {
      updateSlider(nutrition, [0, slider_mid_points[nutrition]]); //setting slider maximum value to the midpoint
      console.log("too much");
    } else {
      updateSlider(nutrition, [slider_mid_points[nutrition], 1000]); //setting slider minimum value to the midpoint
      console.log("too little");
    }
    navigate("/improvements/" + listID);
  };

  return (
    <>
      <div className={"nutrition-card " + open}>
        <div className="nutrition-card-title">
          <h2>{nutrition_name}</h2>
          <DailyValueBar
            nutrition_name={nutrition_name}
            nutrition_measurement={nutrition_measurement}
            amount={amount}
            healthy_amount={healthy_amount}
            custom_class="top"
          />
        </div>
        <div className="card-text">
          <p>{children}</p>
          <div className="container">
            <Button customClass="wide dark" onClick={on_improvement_click}>
              See how to improve
            </Button>
          </div>
        </div>
        <button className="card-toggle" onClick={onClick}>
          <img className="chevron" src={chevron} />
          <img className="x-icon" src={x_icon} />
        </button>
      </div>
    </>
  );
};
ExpandingCard.propTypes = {
  nutrition_name: PropTypes.string.isRequired,
  nutrition_measurement: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  healthy_amount: PropTypes.number.isRequired,
  custom_class: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default ExpandingCard;
