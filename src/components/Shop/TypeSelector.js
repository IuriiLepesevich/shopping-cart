import "../../styles/TypeSelector.css";

const TypeSelector = (props) => {
  const { types, filter, handleTypeClick } = props;
  return (
    <div className="TypeSelector">
      <div className="heading">Types:</div>
      {types.map((type) => {
        const className = `type${type === filter.type ? ` selected` : ""}`;
        return (
          <div
            className={className}
            id={type}
            key={type}
            onClick={handleTypeClick}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
};

export default TypeSelector;
