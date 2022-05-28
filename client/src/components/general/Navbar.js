import "./Navbar.scss";
import { Link } from "react-router-dom";
import Light_Logo from "./../../assets/logo-light.svg";
import searchIcon from "./../../assets/general/search.svg";

const Navbar = ({
  setSignInFormPopUp,
  setSignUpFormPopUp,
  opacity,
  setOpacity,
  setPosition,
}) => {
  return (
    <nav className="Navbar" style={{ opacity: opacity }}>
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
          <Link to="/search">Home</Link>
        </li>
        <li className="nav__list">
          <Link to="/search">About US</Link>
        </li>
        <li className="nav__list">
          <Link to="/search">BLOG</Link>
        </li>
        <li className="nav__list">
          <Link to="/search">CONTACT</Link>
        </li>
        <li className="nav__list">
          <button
            className="loginBtn"
            onClick={() => {
              setSignInFormPopUp(true);
              setOpacity("20%");
              setPosition("fixed");
            }}
          >
            LOGIN
          </button>
        </li>
        <li className="nav__list">
          <button
            className="registerBtn"
            onClick={() => {
              setSignUpFormPopUp(true);
              setOpacity("20%");
              setPosition("fixed");
            }}
          >
            REGISTER
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
