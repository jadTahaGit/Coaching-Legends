import "./Navbar.scss";
import { Link } from "react-router-dom";
import info from "./../../assets/general/info.svg";
import LOGO from "./../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="left__navbar">
        <Link to="/" className="logo__wrapper">
          <img src={LOGO} alt="" />
        </Link>
        <ul className="nav__lists">
          <li className="nav__list">
            <Link to="/search">Find A Coach</Link>
          </li>
          <li className="nav__list">
            <Link to="/SignUp">Join</Link>
          </li>
          <li className="nav__list">Sign Up</li>
        </ul>
      </div>
      <div className="right__navbar">
        <img src={info} alt="" />
        <select name="" id="" className="language__dropdown">
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Arabic">Arabic</option>
          <option value="Portogese">Portogese</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
