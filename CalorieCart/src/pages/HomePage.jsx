import DetailEntry from "../components/DetailEntry";
import healthyfoodleft from "../assets/healthy-food-left.png";
import healthyfoodright from "../assets/healthy-food-right.png";

function HomePage() {
  return (
    <>
      <div className="header-footer header">
        <h1 className="header-text">
          CalorieCart: Create your healthy, nutritious grocery list today!
        </h1>
      </div>
      <div className="main-content">
        <DetailEntry></DetailEntry>
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
}

export default HomePage;
