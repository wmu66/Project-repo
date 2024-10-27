import RangeSlider from "react-range-slider-input";

import PropTypes from "prop-types";
import { useState } from "react";

const FilterSlider = ({ min, max, label, step, measurement }) => {
  const [[min_value, max_value], SetValue] = useState([
    Number(min),
    Number(max),
  ]);

  const [isEnabled, setDisabled] = useState(true);

  const handleInput = (values) => {
    SetValue(values);
  };

  const handleCheckbox = () => {
    setDisabled(!isEnabled);
  };

  return (
    <>
      <div className="filter-slider-label-and-checkbox">
        <h2 className="filter-slider-label">{label}</h2>
        <input
          type="checkbox"
          className="checkbox"
          checked={isEnabled}
          onChange={handleCheckbox}
        />
      </div>
      <RangeSlider
        min={min}
        max={max}
        step={step}
        onInput={handleInput}
        value={[min_value, max_value]}
        disabled={!isEnabled}
      />
      <div className="range-legend">
        {isEnabled && (
          <p className="slide-value"> {min_value + measurement} </p>
        )}
        {isEnabled && (
          <p className="slide-value"> {max_value + measurement} </p>
        )}
      </div>
    </>
  );
};

FilterSlider.propTypes = {
  min: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  measurement: PropTypes.string.isRequired, //measurement is the measurement of the values, e.g. gramms
  max: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FilterSlider;
