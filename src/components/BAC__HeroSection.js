import "./BAC__HeroSection.scss";

const BAC__HeroSection = () => {
  return (
    <div className="BAC__HeroSection">
      <form className="signUpForm">
        <h1>Coach online</h1>
        <p>Earn money on your schedule</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="signUpBtn">
          Sign up with email
        </button>

        <p className="breakline">
          <span>or continue with</span>
        </p>
        <div className="btns">
          <button className="Facebook__btn">Facebook</button>
          <button className="Google__btn">Google</button>
        </div>
        <p>By signing up, you agree to Terms of Service and Privacy Policy</p>
      </form>
    </div>
  );
};

export default BAC__HeroSection;
