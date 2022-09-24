import './HeroSection.scss';
import woman from './../../assets/home/woman_noBG.png';

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="relativeBox">
        <img src={woman} alt="woman foto" className="heroImage animate__animated animate__fadeIn" />
        <h1 className="hero__heading animate__animated animate__bounce">
          Find Your <span className="Cookie">Coach,</span>
          <br />
          Find your Match
        </h1>
        <div className="search__wrapper animate__animated animate__fadeInLeft">
          <input
            type="text"
            className="search__input"
            placeholder="Search for Coaches"
          />
          <button className="search__btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
