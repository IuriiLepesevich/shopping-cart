import "../../styles/GoodsCatalog.css";
import Product from "./Product";

const GoodsCatalog = (props) => {
  const { products, handleAdd } = props;
  return (
    <div className="GoodsCatalog">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          type={product.type}
          price={product.price}
          productId={product.id}
          handleAdd={handleAdd}
        />
      ))}
    </div>
  );
};

export default GoodsCatalog;
