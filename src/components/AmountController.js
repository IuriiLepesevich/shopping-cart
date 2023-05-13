import "../styles/AmountController.css";

const AmountController = (props) => {
  const { amount, id, decrement, increment } = props;
  return (
    <div className="AmountController">
      <div className="decrement minus" id={id} onClick={decrement}>
        <div className="sign">-</div>
      </div>
      <input className="amount" value={amount} />
      <div
        className="increment"
        id={id}
        aria-readonly={true}
        onClick={increment}
      >
        <div className="sign">+</div>
      </div>
    </div>
  );
};

export default AmountController;
