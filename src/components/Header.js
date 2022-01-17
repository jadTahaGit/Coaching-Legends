import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="left__header">
        <div className="logo__wrapper">LOGO</div>
        <ul className="nav__lists">
          <li className="nav__list">
            <a href="#">Find A Coach</a>
          </li>
          <li className="nav__list">
            <a href="#">Become A Coach</a>
          </li>
          <li className="nav__list">
            <a href="#">Are you a company?</a>{" "}
          </li>
        </ul>
      </div>
      <div className="right__navbar">
        <select name="" id="" className="language__dropdown">
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Arabic">Arabic</option>
          <option value="Portogese">Portogese</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
