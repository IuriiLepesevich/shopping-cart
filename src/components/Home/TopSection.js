import "../../styles/TopSection.css";

const TopSection = (props) => {
  return (
    <div className="TopSection">
      <div className="top">
        <div className="image"></div>
        <div className="text">
          <div className="heading">New models every season</div>
          Get ready to turn heads with our stylish and versatile collection of
          on-trend clothing and accessories
        </div>
      </div>
      <div className="bottom">
        <div className="text">
          <div className="heading">Everyone is perfect</div>
          Find your perfect fit with our curated selection of fashionable and
          comfortable clothing for every occasion
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
};

export default TopSection;
