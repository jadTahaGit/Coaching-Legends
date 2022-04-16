import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import Navbar from "./components/general/Navbar";
import HeroSection from "./components/client/HeroSection";
import CoachingsOverview from "./components/client/CoachingsOverview";
import Benefits from "./components/client/Benefits";
import HowWeWork from "./components/client/HowWeWork";
import HappyStart from "./components/client/HappyStart";
import Footer from "./components/general/Footer";
import SignUp from "./components/SignUp";
import HomeBody from "./components/Home/HomeBody";
import SearchCoaches from "./components/Home/SearchCoaches";
import CoachProfile from "./components/coachProfile/CoachProfile";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <br />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchCoaches />
                <HomeBody />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/moreAboutUs"
            element={
              <>
                <HeroSection />
                <CoachingsOverview />
                <Benefits />
                <HowWeWork />
                <HappyStart />
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/SignUp"
            element={
              <>
                <SignUp />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <>
                <SearchCoaches />
                <HomeBody />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                <CoachProfile />
                <Footer />
              </>
            }
          ></Route>
        </Routes>

        {/* 
        <CoachProfile />
        <Footer />
        <Navbar></Navbar>
        <Chat></Chat>
        <Footer />  */}
      </div>
    </Router>
  );
}

export default App;
