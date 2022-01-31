import React from "react";
import "./Benefits.scss";
import global from "../../assets/client/benefits/global.svg";
import expert from "../../assets/client/benefits/expert.svg";
import verified from "../../assets/client/benefits/verified.svg";
import clock from "../../assets/client/benefits/clock.svg";
import dollar from "../../assets/client/benefits/dollar.svg";
import search from "../../assets/client/benefits/search.svg";
import calender from "../../assets/client/benefits/calender.svg";
import thunder from "../../assets/client/benefits/thunder.svg";
import confidence from "../../assets/client/benefits/confidence.svg";
import globalViolet from "../../assets/client/benefits/global__violet.svg";

const Benefits = () => {
  return (
    <div className="Benefits">
      <img src={global} class="global__symbol" alt="" />
      <div className="start__changing">
        <h1>Start Changing your life now.</h1>
        <p>Trust our network of thousand of coaches</p>
        <div className="differences__container">
          <div className="differnce">
            {/* logo */}
            <h2>Expert coaches</h2>
            <p>Find an expert coach</p>
          </div>
          <div className="differnce">
            {/* logo */}
            <h2>Expert coaches</h2>
            <p>Find an expert coach</p>
          </div>
          <div className="differnce">
            {/* logo */}
            <h2>Expert coaches</h2>
            <p>Find an expert coach</p>
          </div>
          <div className="differnce">
            {/* logo */}
            <h2>Expert coaches</h2>
            <p>Find an expert coach</p>
          </div>
        </div>
      </div>
      <div className="focus__on__help">
        <h1>Focus on the help you need</h1>
        <p>Prepare to achieve your goals with us!</p>
        <div className="help__options__container">
          <div className="help__option">
            {/* Logo */}
            <h3>Manage yourself and your actions</h3>
            <p>
              Get support and guidance that holds you accountable to your goal
            </p>
          </div>
          <div className="help__option">
            {/* Logo */}
            <h3>Manage yourself and your actions</h3>
            <p>
              Get support and guidance that holds you accountable to your goal
            </p>
          </div>
          <div className="help__option">
            {/* Logo */}
            <h3>Manage yourself and your actions</h3>
            <p>
              Get support and guidance that holds you accountable to your goal
            </p>
          </div>
          <div className="help__option">
            {/* Logo */}
            <h3>Manage yourself and your actions</h3>
            <p>
              Get support and guidance that holds you accountable to your goal
            </p>
          </div>
        </div>
      </div>
      <div className="request__a__coach">
        {/* Logo */}
        <h1>Request a private coach</h1>
        <p>Post your requirements and let tutors find you</p>
        <button>Post a Request</button>
      </div>
    </div>
  );
};

export default Benefits;
