import Button from "./Button";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dialog from "./Dialog";
import DailyValueBar from "./DailyValueBar";
import {getList, getHealthAmounts, getListAmounts} from "./Data.jsx";

const DailyValuesRightSide = () => {
  let daynumber = 7; //7 is the default value
  const dialogRef = useRef();
  const navigate = useNavigate();
  const { listID } = useParams();
  const navigateToStats = () => {
    navigate("/stats/" + listID);
  }
  const list = getList();
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
          amount={getListAmounts().cals}
          healthy_amount={getHealthAmounts().cals}
          custom_class="top"
        />
        <DailyValueBar
          nutrition_name="Fats"
          nutrition_measurement="g"
          amount={getListAmounts().fats}
          healthy_amount={getHealthAmounts().fats}
        />
        <DailyValueBar
          nutrition_name="Protein"
          nutrition_measurement="g"
          amount={getListAmounts().proteins}
          healthy_amount={getHealthAmounts().proteins}
        />
        <DailyValueBar
          nutrition_name="Carbohydrates"
          nutrition_measurement="g"
          amount={getListAmounts().carbs}
          healthy_amount={getHealthAmounts().carbs}
        />
        <DailyValueBar
          nutrition_name="Sugars"
          nutrition_measurement="g"
          amount={getListAmounts().sugars}
          healthy_amount={getHealthAmounts().sugars}
        />
        <DailyValueBar
          nutrition_name="Fiber"
          nutrition_measurement="g"
          amount={getListAmounts().fibers}
          healthy_amount={getHealthAmounts().fibers}
          custom_class="bottom"
        />
        <Button customClass="dark wide no-margin" onClick={navigateToStats}>Get detailed stats</Button>
      </div>
    </>
  );
};

export default DailyValuesRightSide;
