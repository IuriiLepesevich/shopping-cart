import "../styles/AmountController.css";

const AmountController = (props) => {
  const { amount, id, decrement, increment } = props;
  return (
    <div className="AmountController">
      <div className="decrement" id={id} onClick={decrement}>
        <div className="sign" id={id}>
          -
        </div>
      </div>
      <input className="amount" value={amount} aria-readonly={true} />
      <div className="increment" id={id} onClick={increment}>
        <div className="sign" id={id}>
          +
        </div>
      </div>
    </div>
  );
};

export default AmountController;
