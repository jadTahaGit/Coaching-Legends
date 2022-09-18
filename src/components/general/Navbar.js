import "./Navbar.scss";
import { Link } from "react-router-dom";
import Light_Logo from "./../../assets/logo-light.svg";
import searchIcon from "./../../assets/general/search.svg";
import { Fragment, useState } from "react";
import Modal from "../ui/Modal";
import SignUpForm from "./../form/SignUpForm";
import SignIn from "./../form/SignIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { openNavbar, closeNavbar } from "./navbarRes.js";
import { useRef, useEffect } from "react";

const Navbar = () => {
  const [signUpFormPopUp, setSignUpFormPopUp] = useState(false);
  const [signInFormPopUp, setSignInFormPopUp] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const registerButtonHandler = () => {
    setSignUpFormPopUp(true);
  };

  const loginButtonHandler = () => {
    setSignInFormPopUp(true);
  };

  const closeSignUpForm = () => {
    setSignUpFormPopUp(false);
  };

  const closeSignInForm = () => {
    setSignInFormPopUp(false);
  };

  // refs
  const Navbar = useRef(null);
  const nav__lists = useRef(null);
  const navIconWrapper = useRef(null);
  const closeIcon = useRef(null);

  const handleHamclick = () => {
    const nav = Navbar.current;
    const navList = nav__lists.current;
    const navIcon = navIconWrapper.current;
    const closeBtn = closeIcon.current;
    openNavbar(nav, navList, navIcon, closeBtn);
  };

  const handleCloseClick = () => {
    const nav = Navbar.current;
    const navList = nav__lists.current;
    const navIcon = navIconWrapper.current;
    const closeBtn = closeIcon.current;
    closeNavbar(nav, navList, navIcon, closeBtn);
  };

  return (
    <Fragment>
      <div
        className="navIconWrapper"
        ref={navIconWrapper}
        onClick={handleHamclick}
      >
        <MenuIcon className="navIcon" name="reorder-three"></MenuIcon>
      </div>
      <nav className={`Navbar ${offset > 150 ? "scrolled" : ""}`} ref={Navbar}>
        <CloseIcon
          className="closeIcon"
          ref={closeIcon}
          onClick={handleCloseClick}
        ></CloseIcon>
        <Link to="/" className="logo__wrapper">
          <img src={Light_Logo} alt="" />
        </Link>
        <div className="Searchbar">
          <div className="iconWrapper">
            <img src={searchIcon} alt="" />
          </div>
          <input type="search" placeholder='Try "Life Coach"' />
          <button className="search">Search</button>
        </div>

        <ul className="nav__lists" ref={nav__lists}>
          <li className="nav__list">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__list">
            <Link to="/search">About Us</Link>
          </li>
          <li className="nav__list">
            <Link to="/blogs">Blog</Link>
          </li>
          <li className="nav__list">
            <Link to="/search">Contact</Link>
          </li>
          <li className="nav__list">
            <button className="loginBtn" onClick={loginButtonHandler}>
              Login
            </button>
          </li>
          <li className="nav__list">
            <button className="registerBtn" onClick={registerButtonHandler}>
              Register
            </button>
          </li>
        </ul>
      </nav>
      {signUpFormPopUp && (
        <Modal onClose={closeSignUpForm}>
          <SignUpForm onClose={closeSignUpForm} />
        </Modal>
      )}
      {signInFormPopUp && (
        <Modal onClose={closeSignInForm}>
          <SignIn onClose={closeSignInForm} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Navbar;
