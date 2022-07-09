import './HappyStart.scss';
import happyClients from './../../assets/home/happyStart/happyClients.png';

const HappyStart = () => {
  return (
    <div className="HappyStart">
      <img src={happyClients} alt="" />
      <h1>Over 5,000 clients join us monthly</h1>
      <p>
        and achieve their learning goals. With our expert tutors, your goals are
        closer than ever!
      </p>
      <button>Start Now</button>
    </div>
  );
};

export default HappyStart;
