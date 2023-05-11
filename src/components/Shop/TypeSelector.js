import "../../styles/TypeSelector.css";

const TypeSelector = (props) => {
  const { types } = props;
  return (
    <div className="TypeSelector">
      <div className="heading">Types:</div>
      {types.map((type) => (
        <div className="type" id={type} key={type}>
          {type}
        </div>
      ))}
    </div>
  );
};

export default TypeSelector;
