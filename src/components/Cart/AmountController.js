import "../../styles/AmountController.css";

const AmountController = (props) => {
  const { amount, id, decrement, increment } = props;
  return (
    <div className="AmountController">
      <div className="decrement" id={id} onClick={decrement}>
        -
      </div>
      <input className="amount" value={amount} />
      <div
        className="increment"
        id={id}
        aria-readonly={true}
        onClick={increment}
      >
        +
      </div>
    </div>
  );
};

export default AmountController;
