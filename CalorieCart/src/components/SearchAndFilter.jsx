import DropDownMenu from "./DropDownMenu/";
import FilterSlider from "./FilterSlider";
import Button from "./Button";
import {resetSlider, setSearch} from "./Data.jsx";

export function resetSliders() {
  resetSlider();
}
const SearchAndFilter = () => {
  const category_options = [
    //placeholder for testing
    "Any category",
    "Meat",
    "Fruit and vegetables",
    "Bread",
  ];
  // const color_options = ["Any color", "Blue", "Red", "Green"]; //placeholder for testing
  const handleChange = (event) => {
    setSearch(event.target.value);
  }
  return (
    <>
      <div className="editor-column-div">
        <input type="text" onInput={handleChange} className="input small" placeholder="Search..." />
        <DropDownMenu options={category_options} custom_class="small" />
        {/* <DropDownMenu options={color_options} size="small" /> */}
        <FilterSlider
          min="0"
          max="500"
          step="10"
          label="Calories"
          measurement="kcal"
          substance="Caloric Value"
        />
        <FilterSlider 
          min="1" 
          max="50" 
          step="1" 
          label="Fat" 
          measurement="g" 
          substance="Fat"
          />
        <FilterSlider
          min="0"
          max="50"
          step="1"
          label="Protein"
          measurement="g"
          substance="Protein"
        />
        <FilterSlider
          min="0"
          max="50"
          step="1"
          label="Carbohydrates"
          measurement="g"
          substance="Carbohydrates"
        />
        <FilterSlider 
          min="0" 
          max="50" 
          step="1" 
          label="Fiber"
          measurement="g" 
          substance="Dietary Fiber"
        />
        <Button size="medium" background="dark" onclick={resetSliders}>
          Reset selection
        </Button>
      </div>
    </>
  );
};

export default SearchAndFilter;
