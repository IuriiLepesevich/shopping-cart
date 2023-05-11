import "../../styles/SearchField.css";

const SearchField = (props) => {
  const { handleNameInput } = props;
  return (
    <div className="SearchField">
      <label htmlFor="goodsSearch">Search for product:</label>
      <input
        type="text"
        name="goodsSearch"
        id="goodsSearch"
        placeholder="Product name"
        onChange={handleNameInput}
      />
    </div>
  );
};

export default SearchField;
