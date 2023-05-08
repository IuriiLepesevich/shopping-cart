import "../../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <div className="Hero">
      <div className="text">
        <div className="heading">Unleash Your Fashion Sense</div>
        <Link to="/shop" className="to-shop">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
