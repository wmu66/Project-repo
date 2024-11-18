import PropTypes from "prop-types";

const CustomValue = ({
  nutrition,
  value,
  measurement,
  stepsize,
  onChange,
  min,
  max,
}) => {
  const reduce = () => {
    const new_value = value - stepsize;
    console.log(min);
    if (new_value >= min) {
      onChange(nutrition, new_value);
    }
  };

  const increase = () => {
    const new_value = value + stepsize;
    if (new_value <= max) {
      onChange(nutrition, new_value);
    }
  };

  return (
    <>
      <div className="custom-value-setter-div">
        {nutrition}:
        <span style={{ color: "var(--accentcolor2)" }}>
          {value + measurement}
        </span>
      </div>
      <div className="custom-value-setter-div">
        <button className="custom-value-button" onClick={reduce}>
          -
        </button>
        <button className="custom-value-button" onClick={increase}>
          +
        </button>
      </div>
    </>
  );
};

CustomValue.propTypes = {
  nutrition: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurement: PropTypes.string.isRequired,
  stepsize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
export default CustomValue;
