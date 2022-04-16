import "./Home.scss";

import ideal from "../../assets/home/ideal.svg";
import pay from "../../assets/home/pay.svg";
import online from "../../assets/home/online.svg";
import books from "../../assets/home/books.svg";
import verified from "../../assets/home/verified.svg";
import america from "../../assets/home/america.svg";
import heart from "../../assets/home/heart.svg";
import woman from "../../assets/home/woman.jpg";
import star from "../../assets/home/star.svg";

const HomeBody = () => {
  return (
    <div className="HomeBody">
      <div className="Ideas">
        <div className="Idea">
          <div className="image__wrapper">
            <img src={ideal} alt="" />
          </div>
          <p>How to Choose an ideal coach</p>
        </div>
        <div className="Idea">
          <div className="image__wrapper">
            <img src={pay} alt="" />
          </div>
          <p>How you can pay for sessions</p>
        </div>
        <div className="Idea">
          <div className="image__wrapper">
            <img src={online} alt="" />
          </div>
          <p>Where lessons take place</p>
        </div>
        <div className="Idea">
          <div className="image__wrapper">
            <img src={books} alt="" />
          </div>
          <p>What is our methodology</p>
        </div>
        <div className="Idea">
          <div className="image__wrapper">
            <img src={verified} alt="" />
          </div>
          <p>How we verify our Coaches</p>
        </div>
      </div>
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
                <p className="catagory">I will be you Life Coach</p>
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
                <p className="catagory">I will be you Life Coach</p>
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
                <p className="catagory">I will be you Life Coach</p>
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
                <p className="catagory">I will be you Life Coach</p>
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
                <p className="catagory">I will be you Life Coach</p>
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
