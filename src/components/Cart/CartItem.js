import "../../styles/CartItem.css";
import AmountController from "../AmountController";

const CartItem = (props) => {
  const { name, price, amount, id, decrement, increment } = props;
  return (
    <div className="CartItem">
      <div className="image"></div>
      <div className="text">
        <div className="name">{name}</div>
        <div className="price">{Math.round(price * amount * 100) / 100}$</div>
      </div>
      <AmountController
        amount={amount}
        id={id}
        decrement={decrement}
        increment={increment}
      />
    </div>
  );
};

export default CartItem;
