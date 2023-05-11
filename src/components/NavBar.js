import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { cartSize } = props;
  return (
    <nav className="NavBar">
      <div className="logo">
        <Link to="/">FakeShop</Link>
      </div>
      <ul>
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="shop">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="cart">
          <Link to="/cart">Cart</Link>
          {cartSize > 0 && <div className="size">{cartSize}</div>}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
