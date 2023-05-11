import "../../styles/CartItemList.css";
import CartItem from "./CartItem";

const CartItemList = (props) => {
  const { items, decrement, increment } = props;
  return (
    <div className="CartItemList">
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          type={item.type}
          price={item.price}
          amount={item.amount}
          id={item.id}
          decrement={decrement}
          increment={increment}
        />
      ))}
    </div>
  );
};

export default CartItemList;
