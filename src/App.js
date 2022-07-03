import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/general/Navbar';
import NavbarBs from './components/general/NavbarBs';
import Footer from './components/general/Footer';
import FooterBs from './components/general/FooterBs';
import Coaches from './components/Coaches';
import HomeBody from './components/services/Services';
import CoachProfile from './components/profile/Profile';
import NewProfile from './components/profile/NewProfile';
import Chat from './components/chat/Chat';
import Service from './components/servicePage/Service';
import Home from './components/Home.js';
import Blogs from './components/blog/Blogs';
import BlogsBs from './components/blog/BlogsBs';
import Blog from './components/blog/Blog';
import BlogBs from './components/blog/BlogBs';

function App() {
  return (
    <Router>
      <div className="App" id="App">
        {/* <Navbar /> */}
        <NavbarBs />
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
            path="/coaches"
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
          />{' '}
          <Route
            path="/newprofile"
            element={
              <Fragment>
                <NewProfile />
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
          <Route
            path="/blogsbs"
            element={
              <Fragment>
                <BlogsBs />
              </Fragment>
            }
          />
          <Route
            path="/blog"
            element={
              <Fragment>
                <Blog />
              </Fragment>
            }
          />
          <Route
            path="/blogbs"
            element={
              <Fragment>
                <BlogBs />
              </Fragment>
            }
          />
        </Routes>
      </div>
      {/* <Footer /> */}

      {/* responsive footer */}
      <FooterBs />
    </Router>
  );
}

export default App;
