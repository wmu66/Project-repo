import PropTypes from "prop-types";

const DailyValueBar = ({
  healthy_amount,
  nutrition_name,
  nutrition_measurement,
  amount,
  custom_class,
}) => {
  let absolute_difference = amount - healthy_amount;
  let relative_difference = Math.round((amount / healthy_amount - 1) * 100);

  let value = relative_difference;
  value = 35 + value;
  if (value > 75) {
    //relative difference is out of bounds
    value = 75;
  } else if (value < 0) {
    //relative difference is out of bounds
    value = 0;
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
          {relative_difference + "% (" + absolute_difference + nutrition_measurement + ")"}
        </h4>
      </div>
      <div className="daily-value-bar">
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
