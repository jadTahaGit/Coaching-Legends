import "./HeroSection.scss";
import woman from "./../../assets/Home/woman_noBG.png";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <img src={woman} alt="woman foto" className="heroImage" />
      <h1 className="hero__heading">
        Find Your <span className="Cookie">Coach,</span>
        <br />
        Find your Match
      </h1>
      <div className="search__wrapper">
        <input
          type="text"
          className="search__input"
          placeholder="Search for Coaches"
        />
        <button className="search__btn">Search</button>
      </div>
    </div>
  );
};

export default HeroSection;
