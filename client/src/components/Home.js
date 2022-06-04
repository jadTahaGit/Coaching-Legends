import "./Home.scss";
import HeroSection from "./Home/HeroSection";
import CoachingsOverview from "./Home/CoachingsOverview";
import Benefits from "./Home/Benefits";
import HowWeWork from "./Home/HowWeWork";
import HappyStart from "./Home/HappyStart";
const Home = () => {
  return (
    <div className="Home">
      <HeroSection />
      <CoachingsOverview />
      <Benefits />
      <HowWeWork />
      <HappyStart />
    </div>
  );
};

export default Home;
