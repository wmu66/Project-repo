import chevron from "../assets/chevron.svg";
import x_icon from "../assets/x_icon.svg";
import { useState } from "react";
import DailyValueBar from "./DailyValueBar";
import Button from "./Button";
import PropTypes from "prop-types";

const ExpandingCard = ({
  nutrition_name,
  nutrition_measurement,
  amount,
  healthy_amount,
  children,
}) => {
  const [open, setOpen] = useState(""); //on default closed
  const onClick = () => {
    if (!open) {
      setOpen("open");
    } else {
      setOpen("");
    }
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
            <Button customClass="wide dark">See how to improve</Button>
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
