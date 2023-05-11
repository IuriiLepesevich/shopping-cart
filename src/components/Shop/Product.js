import "../../styles/Product.css";

const Product = (props) => {
  const { name, type, price } = props;
  return (
    <div className="Product">
      <div className="image"></div>
      <div className="name">{name}</div>
      <div className="price">{price} $</div>
      <div className="add">Add to cart</div>
    </div>
  );
};

export default Product;
