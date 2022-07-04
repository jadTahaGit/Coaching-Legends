import "./NavbarBs.scss";
import { Link } from "react-router-dom";
import Light_Logo from "./../../assets/logo-light.svg";
import searchIcon from "./../../assets/general/search.svg";
import { Fragment, useState } from "react";
import Modal from "../ui/Modal";
import SignUpForm from "./../form/SignUpForm";
import SignIn from "./../form/SignIn";

const NavbarBs = () => {
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
        <nav className="header-navbar navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#"><img src={Light_Logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#b1d8ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Contact</Link>
                        </li>
                    </ul>
                    <form class="d-flex ms-0 ms-lg-5 me-auto" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-success" type="button">Search</button>
                    </form>
                    <span className="navbar-text d-flex flex-row justify-content-center justify-content-lg-end">
                        <button className="btn btn-secondary me-2" onClick={registerButtonHandler}>
                            Register
                        </button>
                        <button className="btn btn-primary" onClick={loginButtonHandler}>
                            Login
                        </button>
                    </span>
                </div>
            </div>
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

export default NavbarBs;
