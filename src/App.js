import "./App.scss";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoachingsOverview from "./components/CoachingsOverview";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <CoachingsOverview></CoachingsOverview>
      <Benefits></Benefits>
    </div>
  );
}

export default App;
