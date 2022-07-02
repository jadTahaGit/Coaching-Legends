import './newProfile.scss';
import Star from '../../assets/service/star.svg';

const CoachProfile = () => {
  return (
    <div className="CoachProfile">
      <div className="leftSidebar">
        <div className="userInfoBox">
          <div className="header">
            <div className="imgWrapper"></div>
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
                <span className="num_of_orders">({'104'})</span>
              </div>
            </div>
            <div className="btnWrapper">
              <button className="btn contactMe">Contact Me</button>
            </div>
          </div>
          <div className="middleSection">
            <div className="country">Germany</div>{' '}
            <div className="memberSince">Germany</div>
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default CoachProfile;
