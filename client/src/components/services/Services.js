import "./Services.scss";

import america from "../../assets/services/america.svg";
import heart from "../../assets/services/heart.svg";
import grayHeart from "../../assets/services/grayHeart.svg";
import woman from "../../assets/services/woman.jpg";
import star from "../../assets/services/star.svg";
import hamburger from "../../assets/services/hamburger.svg";

const HomeBody = () => {
  const goToProfileScreen = () => {
    window.location.href = "/service";
  };
  return (
    <div
      onClick={goToProfileScreen}
      className="HomeBody"
    >
      <div className="">
        <div className="main">
          <p className="numberOf__results">
            <span>13,150</span> English teachers available
          </p>

          <div className="gig__collection">
            <div className="gig">
              <div className="header__box">
                <div className="flag">
                  <img src={america} alt="" />
                </div>
                <div className="addToFav">
                  <img src={heart} alt="" />
                </div>
              </div>
              <div className="middle__box">
                <div className="userInfo">
                  <img src={woman} alt="" />
                  <div className="textBox">
                    <p className="fullName">Pedro Fed</p>
                    <p className="rank">Rank 1</p>
                  </div>
                </div>
                <div className="catagory">
                  <p>Life Coauch to help you with you life´s problems</p>
                </div>
                <div className="stars">
                  <img src={star} alt="" />
                  <p>4.1</p>
                  <p className="gray">(106)</p>
                </div>
              </div>
              <div className="footer__box">
                <div className="images_wrapper">
                  <img src={hamburger} alt="hamburger Icon" />
                  <img src={grayHeart} alt="heart Icon" />
                </div>
                <div className="textBox">
                  <p>Starting at </p>
                  <p className="price">
                    US$<span>160</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left__sidebar"></div>
      </div>
    </div>
  );
};

export default HomeBody;
