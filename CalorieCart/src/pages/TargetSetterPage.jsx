import healthyfoodleft from "../assets/healthy-food-left.png";
import healthyfoodright from "../assets/healthy-food-right.png";
import ValueSetter from "../components/ValueSetter";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const TargetSetterPage = () => {
  const navigate = useNavigate();
  const go_back = () => {
    navigate("/");
  };
  return (
    <>
      <div className="header-footer header">
        <h1 className="header-text">
          CalorieCart: Create your healthy, nutritious grocery list today!
        </h1>
      </div>
      <div className="main-content target-setter">
        <div className="target-setter-go-back-div">
          <h3>
            Here you can set your daily nutrition targets. <br />
            Or use one of the presets.{" "}
          </h3>
          <Button customClass="dark" onClick={go_back}>
            Go back
          </Button>
        </div>
        <ValueSetter customClass={"target-setter-page"}></ValueSetter>
        <img
          src={healthyfoodleft}
          className="healthy-food-image image-bottom-left"
        />
        <img
          src={healthyfoodright}
          className="healthy-food-image image-bottom-right"
        />
      </div>
      <div className="header-footer footer"></div>
    </>
  );
};

export default TargetSetterPage;
