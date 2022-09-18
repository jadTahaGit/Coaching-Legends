import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css';

import Navbar from './components/general/Navbar';
import Footer from './components/general/Footer';
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
import AddBlog from './components/blog/AddBlog';

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
          <Route
            path="/addblog"
            element={
              <Fragment>
                <AddBlog />
              </Fragment>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
