import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <div className="logo">
        <Link to="/">FakeShop</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
