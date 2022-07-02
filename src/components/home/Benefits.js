import React from "react";
import "./Benefits.scss";
import global from "../../assets/home/benefits/global.svg";
import expert from "../../assets/home/benefits/expert.svg";
import verified from "../../assets/home/benefits/verified.svg";
import clock from "../../assets/home/benefits/clock.svg";
import dollar from "../../assets/home/benefits/dollar.svg";
import search from "../../assets/home/benefits/search.svg";
import calender from "../../assets/home/benefits/calender.svg";
import thunder from "../../assets/home/benefits/thunder.svg";
import confidence from "../../assets/home/benefits/confidence.svg";
import globalViolet from "../../assets/home/benefits/global__violet.svg";

const Benefits = () => {
  return (
    <div className="Benefits">
      <img src={global} className="global__symbol" alt="" />

      <div className="start__changing">
        <h1 className="big_Title">Start Changing your life now.</h1>
        <p className="mini_Title">Trust our network of thousand of coaches</p>
        <div className="differences__container">
          <div className="differnce">
            <img src={expert} alt="" />
            <h2>Expert coaches</h2>
            <p>Find an expert coach</p>
          </div>
          <div className="differnce">
            <img src={verified} alt="" />
            <h2>Verified profiles</h2>
            <p>We check carefully and confirm each coach profile</p>
          </div>
          <div className="differnce">
            <img src={clock} alt="" />
            <h2>Sessions anytime</h2>
            <p>
              Don’t worry about the time, there is always a coach available for
              you
            </p>
          </div>
          <div className="differnce">
            <img src={dollar} alt="" />
            <h2>Affordable prices</h2>
            <p>Choose the coach that best fits your budget</p>
          </div>
        </div>
      </div>

      <div className="focus__on__help">
        <img className="searchIcon" src={search} alt="" />
        <h1>Focus on the help you need</h1>
        <p>Prepare to achieve your goals with us!</p>
        <div className="help__options__container">
          <div className="help__option">
            <img src={calender} alt="" />
            <h3>Manage yourself and your actions</h3>
            <p>
              Get support and guidance that holds you accountable to your goal
            </p>
          </div>
          <div className="help__option">
            <img src={thunder} alt="thunder icon" />
            <h3>Succeed in your career</h3>
            <p>
              Define what is important and what you need to do in order to
              achieve it.
            </p>
          </div>
          <div className="help__option">
            <img src={clock} alt="clock icon" />
            <h3>Get an expert when you need it</h3>
            <p>Get clarity or some inspiration at the right time</p>
          </div>
          <div className="help__option">
            <img src={confidence} alt="confidence icon" />
            <h3>Make progress in you life</h3>
            <p>Improve self confidence, find your purpose and achieve goals.</p>
          </div>
        </div>
      </div>

      <div className="request__a__coach">
        <img src={globalViolet} alt="global icon" />
        <h1>Request a private coach</h1>
        <p>Post your requirements and let tutors find you</p>
        <button>Post a Request</button>
      </div>
    </div>
  );
};

export default Benefits;
