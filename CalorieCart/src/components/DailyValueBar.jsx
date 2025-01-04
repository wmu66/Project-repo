import PropTypes from "prop-types";
import { days } from "./Data";

const DailyValueBar = ({
  healthy_amount,
  nutrition_name,
  nutrition_measurement,
  amount,
  custom_class = "",
}) => {
  amount = Math.round(amount/days)
  healthy_amount = Math.round(healthy_amount/days)
  let absolute_difference = amount - healthy_amount;
  let relative_difference = Math.round((amount / healthy_amount - 1) * 100);

  let value = relative_difference;
  value = Math.min(70, Math.max(35 + value, 2)); //Minimum value is set at 2, so that the bar graph is always a little filled. At 1 percent it does not look good, so 2 is used

  let bar_color = "";

  if (value >= 30 && value <= 40) {
    bar_color = "green";
  } else if (value > 40) {
    bar_color = "too-much";
    if (value >= 70) {
      bar_color = "max";
    }
  } else {
    bar_color = "not-enough";
  }

  return (
    <div className={"daily-value-bar-div " + custom_class}>
      <div className="bar-label">
        <h4>{nutrition_name}: </h4>
        <h4 style={{ color: "var(--accentcolor2)" }}>
          {amount + nutrition_measurement}
        </h4>
      </div>
      <div className="bar-label">
        <h4>Difference: </h4>
        <h4 style={{ color: "var(--accentcolor2)" }}>
          {relative_difference +
            "% (" +
            absolute_difference +
            nutrition_measurement +
            ")"}
        </h4>
      </div>
      <div className={"daily-value-bar" + " " + bar_color}>
        <progress value={value.toString()} max="70" />
      </div>
      <div className="bar-label">
        <p>-35%</p>
        <p>0%</p>
        <p>35%</p>
      </div>
    </div>
  );
};

DailyValueBar.propTypes = {
  nutrition_name: PropTypes.string.isRequired,
  nutrition_measurement: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  healthy_amount: PropTypes.number.isRequired,
  custom_class: PropTypes.string,
};

export default DailyValueBar;
