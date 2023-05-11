import "../../styles/Product.css";

const Product = (props) => {
  const { name, type, price, productId, handleAdd } = props;
  return (
    <div className="Product">
      <div className="image"></div>
      <div className="name">{name}</div>
      <div className="price">{price} $</div>
      <div className="add" id={productId} onClick={handleAdd}>
        Add to cart
      </div>
    </div>
  );
};

export default Product;
