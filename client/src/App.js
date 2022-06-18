import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/general/Navbar";
import Footer from "./components/general/Footer";
import Coaches from "./components/Coaches";
import HomeBody from "./components/Services/Services";
import CoachProfile from "./components/Profile/Profile";
import Chat from "./components/chat/Chat";
import Service from "./components/servicePage/Service";
import Home from "./components/Home.js";
import Blogs from "./components/blog/blogs";

function App() {
  return (
    <Router>
      <div className="App" id="App">
        <Navbar />
        <Routes>
          <Route
            path="/loggedin"
            element={
              <Fragment>
                <HomeBody />
              </Fragment>
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <Fragment>
                <HomeBody />
              </Fragment>
            }
          />
          <Route
            path="/Coaches"
            element={
              <Fragment>
                <Coaches />
              </Fragment>
            }
          />
          <Route
            path="/profile"
            element={
              <Fragment>
                <CoachProfile />
              </Fragment>
            }
          />
          <Route
            path="/service"
            element={
              <Fragment>
                <Service />
              </Fragment>
            }
          />
          <Route
            path="/chat"
            element={
              <Fragment>
                <Chat />
              </Fragment>
            }
          />
          <Route
            path="/blogs"
            element={
              <Fragment>
                <Blogs />
              </Fragment>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );

  // <Router>
  //   <div className="App" id="App" style={{ position: position }}>
  //     <Navbar
  //       opacity={opacity}
  //       setOpacity={setOpacity}
  //       setPosition={setPosition}
  //       setSignInFormPopUp={setSignInFormPopUp}
  //       setSignUpFormPopUp={setSignUpFormPopUp}
  //     ></Navbar>
  //      <br />
  //      <Routes>
  //        <Route
  //           path="/loggedin"
  //           element={
  //             <>
  //               <HomeBody opacity={opacity} />
  //               <Footer opacity={opacity} />
  //             </>
  //           }
  //         ></Route>
  //         <Route
  //           path="/"
  //           element={
  //             <>
  //               <Home></Home>
  //             </>
  //           }
  //         ></Route>
  //         <Route
  //           path="/Coaches"
  //           element={
  //             <>
  //               <Coaches />
  //               <Footer />
  //             </>
  //           }
  //         ></Route>
  //         <Route
  //           path="/search"
  //           element={
  //             <>
  //               <HomeBody opacity={opacity} />
  //               <Footer opacity={opacity} />
  //             </>
  //           }
  //         ></Route>
  //         <Route
  //           path="/profile"
  //           element={
  //             <>
  //               <CoachProfile />
  //               <Footer />
  //             </>
  //           }
  //         ></Route>
  //         <Route
  //           path="/service"
  //           element={
  //             <>
  //               <Service />
  //               <Footer />
  //             </>
  //           }
  //         ></Route>
  //         <Route
  //           path="/chat"
  //           element={
  //             <>
  //               <Chat />
  //             </>
  //           }
  //         ></Route>
  //         <Route
  //           path="/blogs"
  //           element={
  //             <>
  //               <Blogs />
  //             </>
  //           }
  //         ></Route>
  //       </Routes>

  //       <OutsideAlerter
  //         setSignInFormPopUp={setSignInFormPopUp}
  //         setOpacity={setOpacity}
  //         setPosition={setPosition}
  //       >
  //         <SignIn
  //           trigger={signInFormPopUp}
  //           setSignInFormPopUp={setSignInFormPopUp}
  //           setOpacity={setOpacity}
  //           setPosition={setPosition}
  //         ></SignIn>
  //       </OutsideAlerter>

  //       <OutsideAlerter
  //         setSignUpFormPopUp={setSignUpFormPopUp}
  //         setOpacity={setOpacity}
  //         setPosition={setPosition}
  //       >
  //         <SignUpFrom
  //           trigger={signUpFormPopUp}
  //           setSignUpFormPopUp={setSignUpFormPopUp}
  //           setOpacity={setOpacity}
  //           setPosition={setPosition}
  //         ></SignUpFrom>
  //       </OutsideAlerter>

  //       {/*
  //       <CoachProfile />
  //       <Footer />
  //       <Navbar></Navbar>
  //       <Footer />  */}
  //     </div>
  //   </Router>
  // );
}

export default App;
