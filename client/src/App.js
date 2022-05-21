import React, { useState, useRef, useEffect } from "react";
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
import Coaches from "./components/Coaches";
import HomeBody from "./components/Home/HomeBody";
import SearchCoaches from "./components/Home/SearchCoaches";
import CoachProfile from "./components/coachProfile/CoachProfile";
import Chat from "./components/chat/Chat";
import SignIn from "./components/general/SignIn";
import SignUpFrom from "./components/general/SignUpForm";
import OutsideAlerter from "./components/general/OutsideAlerter";
import Service from "./components/service/Service";

function App() {
  const [signInFormPopUp, setSignInFormPopUp] = useState(false);
  const [signUpFormPopUp, setSignUpFormPopUp] = useState(false);
  const [opacity, setOpacity] = useState("100%");
  const [position, setPosition] = useState("");

  return (
    <Router>
      <div className="App" id="App" style={{ position: position }}>
        <Navbar
          opacity={opacity}
          setOpacity={setOpacity}
          setPosition={setPosition}
          setSignInFormPopUp={setSignInFormPopUp}
          setSignUpFormPopUp={setSignUpFormPopUp}
        ></Navbar>
        <br />
        <Routes>
          <Route
            path="/loggedin"
            element={
              <>
                <SearchCoaches />
                <HomeBody opacity={opacity} />
                <Footer opacity={opacity} />
              </>
            }
          ></Route>
          <Route
            path="/"
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
            path="/Coaches"
            element={
              <>
                <Coaches />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <>
                <SearchCoaches opacity={opacity} />
                <HomeBody opacity={opacity} />
                <Footer opacity={opacity} />
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
          <Route
            path="/service"
            element={
              <>
                <Service />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Chat"
            element={
              <>
              <Chat />
              </>
            }
          ></Route>
        </Routes>

        <OutsideAlerter
          setSignInFormPopUp={setSignInFormPopUp}
          setOpacity={setOpacity}
          setPosition={setPosition}
        >
          <SignIn
            trigger={signInFormPopUp}
            setSignInFormPopUp={setSignInFormPopUp}
            setOpacity={setOpacity}
            setPosition={setPosition}
          ></SignIn>
        </OutsideAlerter>

        <OutsideAlerter
          setSignUpFormPopUp={setSignUpFormPopUp}
          setOpacity={setOpacity}
          setPosition={setPosition}
        >
          <SignUpFrom
            trigger={signUpFormPopUp}
            setSignUpFormPopUp={setSignUpFormPopUp}
            setOpacity={setOpacity}
            setPosition={setPosition}
          ></SignUpFrom>
        </OutsideAlerter>

        {/* 
        <CoachProfile />
        <Footer />
        <Navbar></Navbar>
        <Footer />  */}
      </div>
    </Router>
  );
}

export default App;
