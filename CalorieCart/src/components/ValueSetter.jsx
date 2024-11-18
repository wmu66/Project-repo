import SmallTitle from "./SmallTitle";
import Button from "./Button";
import CustomValue from "./CustomValue";
import { useState } from "react";

const ValueSetter = () => {
  const healthy_values = {
    Calories: [2000, "kcal", 100, 1000, 3000], // nutrition, healthy amount, measurement, step size, min and max. Step size is used for manual changing
    Fats: [70, "g", 5, 20, 120],
    Carbohydrates: [250, "g", 10, 100, 450],
    Protein: [55, "g", 5, 15, 100],
    Fiber: [35, "g", 5, 10, 70],
  };

  const [currentValues, setCurrentValues] = useState(healthy_values);

  const defaultPreset = () => {
    const resetValues = Object.fromEntries(
      Object.entries(healthy_values).map(([key, value]) => [key, [...value]])
    );
    setCurrentValues(resetValues);
  };

  const updateValue = (nutrition, newAmount) => {
    //use to update the healthy values
    setCurrentValues((prev) => ({
      ...prev,
      [nutrition]: [newAmount, ...prev[nutrition].slice(1)],
    }));
  };

  const presets = {
    "Default preset": defaultPreset,
    "Muscle building": defaultPreset,
    "Weight loss": defaultPreset,
    "Endurance training": defaultPreset,
  };
  return (
    <>
      <div>
        <SmallTitle customClass="w300">Target values</SmallTitle>
      </div>
      <div className="editor-column-div medium">
        {Object.entries(currentValues).map(
          ([nutrition, [amount, measurement, stepsize, min, max]]) => (
            <CustomValue
              key={nutrition}
              nutrition={nutrition}
              value={amount}
              measurement={measurement}
              stepsize={stepsize}
              min={min}
              max={max}
              onChange={updateValue}
            />
          )
        )}
        <SmallTitle customClass="contributing medium bright">
          Presets
        </SmallTitle>
        {Object.entries(presets).map(([preset, onClick]) => (
          <Button
            key={preset}
            onClick={() => onClick()}
            customClass="w260 dark"
          >
            {preset}
          </Button>
        ))}
      </div>
    </>
  );
};

export default ValueSetter;
