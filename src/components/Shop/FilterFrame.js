import "../../styles/FilterFrame.css";
import SearchField from "./SearchField";
import TypeSelector from "./TypeSelector";

const FilterFrame = (props) => {
  const { products, filter, handleNameInput, handleTypeClick } = props;
  return (
    <div className="FilterFrame">
      <SearchField handleNameInput={handleNameInput} />
      <TypeSelector
        types={[...new Set(products.map((product) => product.type))]}
        filter={filter}
        handleTypeClick={handleTypeClick}
      />
    </div>
  );
};

export default FilterFrame;
