import "../../styles/Footer.css";
import SubscribeForm from "./SubscribeForm";
import About from "./About";
import Support from "./Support";
import Contact from "./Contact";

const Footer = (props) => {
  return (
    <footer className="Footer">
      <div className="logo">FakeShop</div>
      <div className="bottom">
        <div className="subscribe">
          <div className="heading">Subscribe to our news</div>
          <SubscribeForm />
        </div>
        <About />
        <Support />
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
