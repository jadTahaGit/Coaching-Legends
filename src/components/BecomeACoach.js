import "./BecomeACoach.scss";
import girlCoach from "./../assets/BecomeACoach/girlCoach.png";

const BecomeACoach = () => {
  return (
    <div className="BecomeACoach">
      <div className="left">
        <h1>Become A Life Coach</h1>
        <p>
          Earn money sharing your expert knowledge. Sign up to start coaching
          online with us.
        </p>
        <ul>
          <li>Find new clients</li>
          <li>Grow your business</li>
          <li>Get paid safe</li>
        </ul>

        <div className="btns">
          <button>Become A Coach</button>
          <p>How it works</p>
        </div>
      </div>
      <img src={girlCoach} alt="" />
    </div>
  );
};

export default BecomeACoach;
