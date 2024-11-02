const SearchResultElement = () => {
  return (
    <div className="search-result-element">
      <div className="image-container">
        <img src="https://static.ah.nl/dam/product/AHI_4354523130303337393338?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary" />
      </div>
      <h3>Milk 1L 1.5%</h3>
      <p>
        Calories <span style={{ color: "var(--accentcolor2)" }}>46kcal</span>
      </p>
      <div className="buttons-div"></div>
    </div>
  );
};

export default SearchResultElement;
