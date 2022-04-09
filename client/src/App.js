import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/general/Header";
import HeroSection from "./components/client/HeroSection";
import CoachingsOverview from "./components/client/CoachingsOverview";
import Benefits from "./components/client/Benefits";
import HowWeWork from "./components/client/HowWeWork";
import BecomeACoach from "./components/client/BecomeACoach";
import HappyStart from "./components/client/HappyStart";
import Footer from "./components/general/Footer";
import BAC__HeroSection from "./components/coach/BAC__HeroSection";
import CoachBenefits from "./components/coach/CoachBenefits";
import TeachStudents from "./components/coach/TeachStudents";
import QuoteSection from "./components/coach/QuoteSecion";
import FAQ from "./components/coach/FAQ";
import GetPaid from "./components/coach/GetPaid";
import HomeBody from "./components/Home/HomeBody";
import SearchCoaches from "./components/Home/SearchCoaches";
import CoachProfile from "./components/coachProfile/CoachProfile";
import Chat from "./components/chat/Chat";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <br />
    //   <Route path="/" exact component={Services} />
    //   <Route path="/edit/:id" component={EditServices} />
    //   <Route path="/create" component={createServices} />
    //   <Route path="/user" component={createUser} />

    // {
    <div className="App">
      <Header></Header>
      <HeroSection />
      <CoachingsOverview />
      <Benefits />
      <HowWeWork />
      <BecomeACoach />
      <HappyStart />
      <Footer></Footer>
      <Header></Header>
      <BAC__HeroSection />
      <CoachBenefits></CoachBenefits>
      <TeachStudents />
      <QuoteSection />
      <FAQ />
      <GetPaid />
      <Footer />
      <Header></Header>
      <HeroSection />
      <SearchCoaches />
      <HomeBody />
      <Footer />
      <Header></Header>
      <CoachProfile />
      <Footer />
      <Header></Header>
      <Chat></Chat>
      <Footer />
    </div>
    // }
    // </Router>
  );
}

export default App;
