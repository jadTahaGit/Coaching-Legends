import "./Home.scss";
import HeroSection from "./Home/HeroSection";
import CoachingsOverview from "./Home/CoachingsOverview";
import Benefits from "./Home/Benefits";
import HowWeWork from "./Home/HowWeWork";
import HappyStart from "./Home/HappyStart";
import QuoteSection from "./Home/QuoteSection";

const Home = () => {
  return (
    <div className="Home">
      <HeroSection />
      <CoachingsOverview />
      <Benefits />
      <HowWeWork />
      <HappyStart />
      <QuoteSection />
    </div>
  );
};

export default Home;
