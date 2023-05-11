import "../../styles/GoodsCatalog.css";
import Product from "./Product";

const GoodsCatalog = (props) => {
  const { products } = props;
  return (
    <div className="GoodsCatalog">
      {products.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          type={product.type}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default GoodsCatalog;
