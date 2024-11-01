import DropDownMenu from "./DropDownMenu/";
import FilterSlider from "./FilterSlider";
import Button from "./Button";

const SearchAndFilter = () => {
  const category_options = [
    //placeholder for testing
    "Any category",
    "Meat",
    "Fruit and vegetables",
    "Bread",
  ];
  // const color_options = ["Any color", "Blue", "Red", "Green"]; //placeholder for testing

  return (
    <>
      <div className="editor-column-div">
        <input type="text" className="input small" placeholder="Search..." />
        <DropDownMenu options={category_options} size="small" />
        {/* <DropDownMenu options={color_options} size="small" /> */}
        <FilterSlider
          min="0"
          max="1000"
          step="10"
          label="Weight"
          measurement="g"
        />
        <FilterSlider
          min="0"
          max="500"
          step="10"
          label="Calories"
          measurement="kcal"
        />
        <FilterSlider min="1" max="50" step="1" label="Fat" measurement="g" />
        <FilterSlider
          min="0"
          max="50"
          step="1"
          label="Protein"
          measurement="g"
        />
        <FilterSlider
          min="0"
          max="50"
          step="1"
          label="Carbohydrates"
          measurement="g"
        />
        <Button size="medium" background="dark">
          Reset selection
        </Button>
      </div>
    </>
  );
};

export default SearchAndFilter;
