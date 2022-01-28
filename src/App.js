import "./App.scss";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoachingsOverview from "./components/CoachingsOverview";
import Benefits from "./components/Benefits";
import HowWeWork from "./components/HowWeWork";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <CoachingsOverview></CoachingsOverview>
      <Benefits></Benefits>
      <HowWeWork></HowWeWork>
    </div>
  );
}

export default App;
