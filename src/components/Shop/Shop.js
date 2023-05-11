import "../../styles/Shop.css";
import productsArray from "./productsArray";
import FilterFrame from "./FilterFrame";
import GoodsCatalog from "./GoodsCatalog";
import { useState } from "react";

const Shop = (props) => {
  const [products, setProducts] = useState(productsArray);
  const [filter, setFilter] = useState([
    {
      name: "",
      type: "",
    },
  ]);

  const filterProducts = (productsArg) => {};
  return (
    <div className="Shop">
      <FilterFrame products={products} />
      <GoodsCatalog products={products} />
    </div>
  );
};

export default Shop;
