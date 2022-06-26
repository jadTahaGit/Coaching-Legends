import "./Home.scss";
import HeroSection from "./home/HeroSection";
import CoachingsOverview from "./home/CoachingsOverview";
import Benefits from "./home/Benefits";
import HowWeWork from "./home/HowWeWork";
import HappyStart from "./home/HappyStart";
import QuoteSection from "./home/QuoteSection";

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
