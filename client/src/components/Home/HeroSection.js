import "./HeroSection.scss";
import woman from "./../../assets/home/woman_noBG.png";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <img src={woman} alt="" />
      <h1 className="hero__heading">
        <strong className="bold">Find the perfect coach </strong>
        for you
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
