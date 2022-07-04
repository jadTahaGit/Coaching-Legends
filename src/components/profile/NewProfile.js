import "./NewProfile.scss";
import profilePhoto from "../../assets/coachProfile/jad.jpeg";
import Star from "../../assets/service/star.svg";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import UpdateUserInfoForm from "../form/UpdateUserInfoForm";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import america from "../../assets/services/america.svg";
import heart from "../../assets/services/heart.svg";
import grayHeart from "../../assets/services/grayHeart.svg";
import woman from "../../assets/services/woman.jpg";
import star from "../../assets/services/star.svg";
import hamburger from "../../assets/services/hamburger.svg";
import HomeBody from "./Services_cards";

const CoachProfile = () => {
  const goToProfileScreen = () => {
    window.location.href = "/service";
  };
  return (
    <div className="newCoachProfile">
      <div className="leftSidebar">
        <div className="userInfoBox">
          <div className="header">
            <div className="imgWrapper">
              <img src={profilePhoto} alt="user Profile" />
            </div>
            <div className="info">
              <p className="username">Jadtaha13</p>
              <p className="catagory">Dev Coach</p>
              <div className="rating">
                <div className="stars">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <span className="avg_rating">5</span>
                <span className="num_of_orders">({"104"})</span>
              </div>
            </div>
            <hr className="hrGray" />
            <div className="btnWrapper">
              <button className="btn contactMe">Contact Me</button>
            </div>
          </div>
          <div className="middleSection">
            <div className="flex country">
              <LocationOnIcon /> Germany
            </div>{" "}
            <div className="flex memberSince">
              <PersonIcon /> Feb 2022
            </div>{" "}
          </div>
        </div>
        <div className="user2ndInfoBox">
          <div className="Description">
            <h3 className="title">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              sunt error, placeat culpa cupiditate adipisci blanditiis, sit
              aspernatur inventore voluptas nulla dolor! Repudiandae, incidunt.
              Ad nisi dolorem perferendis alias dignissimos. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Necessitatibus quisquam
              inventore tempora! Amet eius quasi perferendis fugiat eligendi
              velit ea maxime pariatur iusto. Illum quasi maiores architecto sit
              laboriosam sunt.{" "}
            </p>
          </div>
          <div className="languages">
            <h3 className="title">Languages</h3>

            <div className="language">
              English - <span className="langLevel">Fluent</span>
            </div>
            <div className="language">
              Spanish - <span className="langLevel">Conversational</span>
            </div>
            <div className="language">
              Serbian - <span className="langLevel">Nativ/Bilingual</span>
            </div>
          </div>
          <div className="skillTests">
            <h3 className="title">Skills</h3>

            <div className="test">
              English Language <span className="testGrade"></span>/10
            </div>
          </div>
          <div className="linkedAccounts">
            <h3 className="title">Linked Accounts</h3>
            <div className="account">
              <GoogleIcon></GoogleIcon>
              <span>Google</span>
            </div>{" "}
            <div className="account">
              <FacebookIcon></FacebookIcon>
              <span>Facebook</span>
            </div>
          </div>
          <div className="skills">
            <h3 className="title">Skills</h3>
            <div className="skill"> Goal setting</div>
            <div className="skill"> Psychological counseling</div>
            <div className="skill">Mindset coaching</div>
            <div className="skill">Mental health</div>
          </div>
          <div className="education">
            <h3 className="title">Education</h3>
            <div className="infoBox">
              <p className="infoTitle">B.Sc. - Psychology</p>
              <p className="info">
                Faculty of philosophy, University of Nis, Serbia, Graduated 2017
              </p>
            </div>{" "}
            <div className="infoBox">
              <p className="infoTitle">B.Sc. - Psychology</p>
              <p className="info">
                Faculty of philosophy, University of Nis, Serbia, Graduated 2017
              </p>
            </div>
          </div>

          <div className="certification">
            <h3 className="title">Certifications</h3>
            <div className="infoBox">
              <div className="title">TEFL Certificate</div>
              <div className="info">theteflcertificate.com 2022</div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div>
        <p className="title"><strong>pedro10's Gigs</strong></p>
         <div className = "cards_wrapper"> <HomeBody />
          <HomeBody />
          <HomeBody />
          <HomeBody />
         </div>
          
        </div>

        {/* <div
      onClick={goToProfileScreen}
      className="HomeBody">
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
    </div> */}
      </div>
    </div>
  );
};

export default CoachProfile;
