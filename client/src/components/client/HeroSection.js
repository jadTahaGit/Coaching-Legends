import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="HeroSection">
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
