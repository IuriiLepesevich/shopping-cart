import "../../styles/Shop.css";
import productsArray from "./productsArray";
import FilterFrame from "./FilterFrame";
import GoodsCatalog from "./GoodsCatalog";
import { useEffect, useState } from "react";

const Shop = (props) => {
  const [products, setProducts] = useState(productsArray);
  const [filter, setFilter] = useState([
    {
      name: "",
      type: "",
    },
  ]);

  const filterProducts = (productsArg, filterArg) => {
    const regexName = new RegExp(filterArg.name, "i");
    const regexType = new RegExp(filterArg.type, "i");
    return productsArg.filter((product) => {
      return regexType.test(product.type) && regexName.test(product.name);
    });
  };

  const [filteredProducts, setFilteredProducts] = useState(
    filterProducts(products, filter)
  );

  useEffect(() => {
    setFilteredProducts(filterProducts(products, filter));
  }, [filter]);

  const handleTypeClick = (e) => {
    const newType = e.target.id;
    if (filter.type === newType)
      setFilter({
        name: filter.name,
        type: "",
      });
    else
      setFilter({
        name: filter.name,
        type: newType,
      });
  };

  const handleNameInput = (e) => {
    setFilter({
      name: e.target.value,
      type: filter.type,
    });
  };
  return (
    <div className="Shop">
      <FilterFrame
        products={products}
        filter={filter}
        handleNameInput={handleNameInput}
        handleTypeClick={handleTypeClick}
      />
      <GoodsCatalog products={filteredProducts} />
    </div>
  );
};

export default Shop;
