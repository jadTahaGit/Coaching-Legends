import './CoachingsOverview.scss';
import bag from './../../assets/home/bag.svg';
import ball from './../../assets/home/ball.svg';
import calender from './../../assets/home/calender.svg';
import dollar from './../../assets/home/dollar.svg';
import graduate from './../../assets/home/graduate.svg';
import love from './../../assets/home/love.svg';
import people from './../../assets/home/people.svg';
import person from './../../assets/home/person.svg';
import plus from './../../assets/home/plus.svg';

const CoachingsOverview = () => {
  return (
    <div className="CoachingsOverview">
      <div className="CO__container">
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={person} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Life Coaching</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={bag} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Business Coaching</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={calender} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Accountability Coaching</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={plus} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Health and Nutrition Coach</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={ball} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Sport Coach</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={love} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Dating Coach</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={dollar} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Financial Coach</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={graduate} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Career Coach</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
        <div className="catagory">
          <div className="catagory__icon__wrapper">
            <img src={people} alt="" />
          </div>
          <div className="catagory__Text__box">
            <h3 className="catagory__title">Coaching for Teams</h3>
            <p className="catagory__numOfCoaches">
              <span>30000</span> Coaches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingsOverview;
