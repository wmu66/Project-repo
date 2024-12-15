import SmallTitle from "./SmallTitle";
import Button from "./Button";
import CustomValue from "./CustomValue";
import { useState } from "react";
import { getHealthAmounts, updateHealthAmounts, getDefaultHealthAmounts } from "./Data";
import PropTypes from "prop-types";

const ValueSetter = ({ customClass }) => {
  const healthy_values = {
    Calories: [getDefaultHealthAmounts().cals, "kcal", 100, 1000, 3000], // nutrition, healthy amount, measurement, step size, min and max. Step size is used for manual changing
    Fats: [getDefaultHealthAmounts().fats, "g", 5, 20, 120],
    Carbohydrates: [getDefaultHealthAmounts().carbs, "g", 10, 100, 450],
    Sugars: [getDefaultHealthAmounts().sugars, "g", 10, 100, 450],
    Protein: [getDefaultHealthAmounts().proteins, "g", 5, 15, 100],
    Fiber: [getDefaultHealthAmounts().fibers, "g", 5, 10, 70],
  };

  const [currentValues, setCurrentValues] = useState(healthy_values);

  const defaultPreset = {
    Calories: 1,
    Fats: 1,
    Carbohydrates: 1,
    Sugars: 1,
    Protein: 1,
    Fiber: 1,
  }; //gives the multiplication used in the preset, 1 leaves values as they are

  const muscleBuildingPreset = {
    Calories: 1.15,
    Protein: 1.3,
    Fats: 1.1,
    Carbohydrates: 1.2,
    Sugars: 1.2,
    Fiber: 1,
  };

  const weightLossPreset = {
    Calories: 0.75,
    Protein: 1.2,
    Fats: 0.85,
    Carbohydrates: 0.8,
    Sugars: 0.8,
    Fiber: 1.15,
  };

  const endurancePreset = {
    Calories: 1.2,
    Protein: 1.1,
    Fats: 1.15,
    Carbohydrates: 1.3,
    Sugars: 1.3,
    Fiber: 1,
  };

  const presetChanger = (presetValues) => {
    //function to handle all preset changes. It changes values using a dictionary passed to it
 
    const newValues = Object.fromEntries(
      Object.entries(healthy_values).map(([key, value]) => [key, [...value]])
    );

 
    Object.keys(newValues).forEach((key) => {
      newValues[key][0] *= presetValues[key];
      newValues[key][0] = Math.round(newValues[key][0]);
      updateValue(key, newValues[key][0]);
    });
    //setCurrentValues(newValues);
  };
  const translator = {
    Calories: "cals", // nutrition, healthy amount, measurement, step size, min and max. Step size is used for manual changing
    Fats: "fats",
    Carbohydrates: "carbs",
    Protein: "proteins",
    Fiber: "fibers",
    Sugars: "sugars",
  };
  const updateValue = (nutrition, newAmount) => {
    //use to update the healthy values
    updateHealthAmounts(translator[nutrition], newAmount);
    setCurrentValues((prev) => ({
      ...prev,
      [nutrition]: [newAmount, ...prev[nutrition].slice(1)],
    }));
  };

  const presets = {
    "Default preset": () => presetChanger(defaultPreset),
    "Muscle building": () => presetChanger(muscleBuildingPreset),
    "Weight loss": () => presetChanger(weightLossPreset),
    "Endurance training": () => presetChanger(endurancePreset),
  };

  return (
    <>
      <div className={customClass}>
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
      </div>
    </>
  );
};

SmallTitle.propTypes = {
  customClass: PropTypes.string, //custom class used for target setter page
};

export default ValueSetter;
