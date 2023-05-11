import "../../styles/Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, price, productId, handleAdd } = props;
  return (
    <div className="Product">
      <Link to={`item/${name}`}>
        <div className="image"></div>
      </Link>
      <div className="name">{name}</div>
      <div className="price">{price} $</div>
      <div className="add" id={productId} onClick={handleAdd}>
        Add to cart
      </div>
    </div>
  );
};

export default Product;
