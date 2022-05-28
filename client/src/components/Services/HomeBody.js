import "./Home.scss";

import america from "../../assets/home/america.svg";
import heart from "../../assets/home/heart.svg";
import woman from "../../assets/home/woman.jpg";
import star from "../../assets/home/star.svg";

const HomeBody = (opacity, setOpacity) => {
  return (
    <div className="HomeBody" style={{ opacity: opacity }}>
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
                <p className="catagory">
                  Life Coauch to help you with you life´s problems
                </p>
                <div className="stars">
                  <img src={star} alt="" />
                  <p>4.1</p>
                  <p className="gray">(106)</p>
                </div>
              </div>
            </div>
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
                <p className="catagory">
                  Life Coauch to help you with you life´s problems
                </p>
                <div className="stars">
                  <img src={star} alt="" />
                  <p>4.1</p>
                  <p className="gray">(106)</p>
                </div>
              </div>
            </div>
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
                <p className="catagory">
                  Life Coauch to help you with you life´s problems
                </p>
                <div className="stars">
                  <img src={star} alt="" />
                  <p>4.1</p>
                  <p className="gray">(106)</p>
                </div>
              </div>
            </div>
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
                <p className="catagory">
                  Life Coauch to help you with you life´s problems
                </p>
                <div className="stars">
                  <img src={star} alt="" />
                  <p>4.1</p>
                  <p className="gray">(106)</p>
                </div>
              </div>
            </div>
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
                <p className="catagory">
                  Life Coauch to help you with you life´s problems
                </p>
                <div className="stars">
                  <img src={star} alt="" />
                  <p>4.1</p>
                  <p className="gray">(106)</p>
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
