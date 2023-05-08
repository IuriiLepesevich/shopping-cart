import "../../styles/ValueHolder.css";

const ValueHolder = (props) => {
  const { heading, text } = props;
  return (
    <div className="ValueHolder">
      <div className="image"></div>
      <div className="heading">{heading}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default ValueHolder;
