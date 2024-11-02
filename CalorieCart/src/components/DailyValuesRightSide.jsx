import Button from "./Button";
import { useRef } from "react";
import Dialog from "./Dialog";
import DailyValueBar from "./DailyValueBar";

const DailyValuesRightSide = () => {
  let daynumber = 7; //7 is the default value
  const dialogRef = useRef();
  return (
    <>
      <div className="editor-column-div wide">
        <div className="day-number-changer">
          <h2>
            List for{" "}
            <span style={{ color: "var(--accentcolor2)" }}>{daynumber}</span>{" "}
            days
          </h2>
          <Button
            size="small"
            background="dark"
            onClick={() => dialogRef.current?.showModal()}
          >
            Edit
          </Button>
          <Dialog
            ref={dialogRef}
            text="Set day amount"
            ok_button_text="Set"
            input_type="number"
          />
        </div>
        <DailyValueBar
          nutrition_name="Calories"
          nutrition_measurement="kcal"
          amount={1800}
          healthy_amount={2000}
          custom_class="top"
        />
        <DailyValueBar
          nutrition_name="Fats"
          nutrition_measurement="g"
          amount={90}
          healthy_amount={70}
        />
        <DailyValueBar
          nutrition_name="Protein"
          nutrition_measurement="g"
          amount={58}
          healthy_amount={55}
        />
        <DailyValueBar
          nutrition_name="Carbohydrates"
          nutrition_measurement="g"
          amount={500}
          healthy_amount={400}
        />
        <DailyValueBar
          nutrition_name="Fiber"
          nutrition_measurement="g"
          amount={20}
          healthy_amount={30}
          custom_class="bottom"
        />
      </div>
    </>
  );
};

export default DailyValuesRightSide;
