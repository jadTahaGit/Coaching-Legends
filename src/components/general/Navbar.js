import "./Navbar.scss";
import { Link } from "react-router-dom";
import Light_Logo from "./../../assets/logo-light.svg";
import searchIcon from "./../../assets/general/search.svg";
import { Fragment, useState } from "react";
import Modal from "../ui/Modal";
import SignUpForm from "./../form/SignUpForm";
import SignIn from "./../form/SignIn";

const Navbar = () => {
  const [signUpFormPopUp, setSignUpFormPopUp] = useState(false);
  const [signInFormPopUp, setSignInFormPopUp] = useState(false);

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

  return (
    <Fragment>
      <nav className="Navbar">
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

        <ul className="nav__lists">
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
