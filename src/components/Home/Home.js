import "../../styles/Home.css";
import Hero from "./Hero";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

const Home = (props) => {
  return (
    <div className="Home">
      <Hero />
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default Home;
