import "../../styles/FilterFrame.css";
import SearchField from "./SearchField";
import TypeSelector from "./TypeSelector";

const FilterFrame = (props) => {
  const { products } = props;
  return (
    <div className="FilterFrame">
      <SearchField />
      <TypeSelector
        types={[...new Set(products.map((product) => product.type))]}
      />
    </div>
  );
};

export default FilterFrame;
