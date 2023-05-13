import { useParams } from "react-router-dom";
import "../../styles/ItemPage.css";
import AmountController from "../AmountController";
import { useState } from "react";

const ItemPage = (props) => {
  const { namePath } = useParams();
  const { items, addToCart } = props;

  const item = items.filter((item) => item.name === namePath)[0];
  const { name, price, id } = item;

  const [amount, setAmount] = useState(1);

  const decrement = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const increment = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="ItemPage">
      <div className="item">
        <div className="image"></div>
        <div className="border"></div>
        <div className="text">
          <div className="name">{name}</div>
          <div className="price">{price}$</div>
          <AmountController
            amount={amount}
            id={id}
            decrement={decrement}
            increment={increment}
          />
          <div
            className="add"
            id={id}
            onClick={(e) => {
              addToCart(e, amount);
            }}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
