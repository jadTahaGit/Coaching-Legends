import "./Service.scss";
import blueTick from "./../../assets/service/blueTick.svg";
import { Link } from "react-router-dom";

import Overview from "./leftSide/Overview";
import Description from "./leftSide/Description";
import AboutTheSeller from "./leftSide/AboutTheSeller";
import FAQ from "./leftSide/FAQ";

const Service = () => {
  return (
    <div className="Service">
      <div className="Service_navbar">{/* import it here */}</div>
      <div className="Service_body">
        <div className="Left_side">
          <Overview></Overview>
          <Description></Description>
          <AboutTheSeller></AboutTheSeller>
          <FAQ></FAQ>

          <div className="Compare_packages"></div>
          <div className="Recommendations"></div>
          <div className="FAQ"></div>
          <div className="Reviews"></div>
        </div>
        <div className="Right_side">
          <div className="Plans_Wrapper">
            <div className="btns">
              <button className="btn basic">Basic</button>
              <button className="btn standard">Standard</button>
              <button className="btn premium">Premium</button>
            </div>
            <div className="package_skeleton">
              <h2 className="Price">US$75</h2>
              <p className="description">
                <span>One Off Call - Advice & Analysis </span>
                We’ll discuss your life, mental blocks & goals - 45 Minutes
                Duration (Subscribe for 1 call a month)
              </p>
              <div className="more_info">
                <div>
                  <img src={blueTick} alt="" />
                  <p className="delivery">30 Days Delivery</p>
                </div>
                <div>
                  <img src={blueTick} alt="" />
                  <p className="session">
                    <span> {"1"}</span> Session
                  </p>
                </div>
              </div>
              <button className="continue">Continue </button>
            </div>
          </div>
          <div className="Contact_seller_btn">
            <button>
              <Link to={`/chat`} state={{ seller: "Pedro" }}>
                Contact Seller
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
