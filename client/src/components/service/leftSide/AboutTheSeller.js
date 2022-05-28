import "./AboutTheSeller.scss";
import Star from "../../../assets/service/star.svg";
import userProfilePhoto from "../../../assets/service/user_profile_photo.webp";

const AboutTheSeller = () => {
  return (
    <div className="AboutTheSeller">
      <h2>About The Seller</h2>
      <div className="importantInfo">
        <div className="image_Wrapper">
          <img src={userProfilePhoto} alt="User Profile Photo" />
        </div>
        <div className="text_Box">
          <h3>pedro10</h3>
          <p className="skills_Adjectives">
            Life Consultant, Entrepreneur, Creative, Advertiser
          </p>
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
      </div>
      <button className="contactMe_Btn">Contact Me</button>
      <div className="infoBox">
        <div className="upper_Part">
          <div className="left">
            <div className="country">
              <p className="title">From</p>
              <p className="value">Portugal</p>
            </div>
            <div className="response_Time">
              <p className="title">Avg. response time</p>
              <p className="value">
                <span>2</span> hours
              </p>
            </div>
          </div>
          <div className="right">
            <div className="membership_Date">
              <p className="title">Member since</p>
              <p className="value">July 2016</p>
            </div>
            <div className="last_Delivery">
              <p className="title">Last delivery</p>
              <p className="value">
                <span>1</span> day
              </p>
            </div>
          </div>
        </div>
        <div className="bottom_Part">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laborum
          voluptatum. Porro dolores nisi suscipit ipsum itaque velit nesciunt
          maxime necessitatibus est ducimus facilis iste inventore recusandae
          praesentium, dolore autem?
        </div>
      </div>
    </div>
  );
};

export default AboutTheSeller;
