import "../../styles/Cart.css";
import { Link } from "react-router-dom";
import CartItemList from "./CartItemList";

const Cart = (props) => {
  const { items, totalPrice, decrement, increment } = props;
  return (
    <div className="Cart">
      {items.length > 0 ? (
        <>
          <CartItemList
            items={items}
            decrement={decrement}
            increment={increment}
          />
          <div className="total">
            Total: {Math.round(totalPrice * 100) / 100}$
          </div>
          <div className="buy">Buy Now</div>
        </>
      ) : (
        <>
          <div className="not-found">Cart is empty...</div>
          <Link to="/shop">
            <div className="to-shop">To Shop</div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
