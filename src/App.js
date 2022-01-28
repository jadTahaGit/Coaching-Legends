import "./App.scss";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoachingsOverview from "./components/CoachingsOverview";
import Benefits from "./components/Benefits";
import HowWeWork from "./components/HowWeWork";
import BecomeACoach from "./components/BecomeACoach";
import HappyStart from "./components/HappyStart";
import Footer from "./components/Footer";
import BAC__HeroSection from "./components/BAC__HeroSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BAC__HeroSection />
      <Footer></Footer>
    </div>
  );
}

export default App;
