import "./HowWeWork.scss";
import woman from "./../../assets/client/HowWeWork/woman.png";
import shield from "./../../assets/client/HowWeWork/shield.svg";
import calender from "./../../assets/client/HowWeWork/calender.png";
import virtuelRoom from "./../../assets/client/HowWeWork/virtuelRoom.png";
import tools from "./../../assets/client/HowWeWork/tools.png";

const HowWeWork = () => {
  return (
    <div className="HowWeWork">
      <div className="header">
        <img src={shield} alt="" />
        <h1>How we work</h1>
        <p>learn online with world's best coaches</p>
      </div>

      <div className="steps">
        <div className="step">
          <div className="left">
            <div className="number">1</div>
            <div className="text__box">
              <h2>Find the best coach</h2>
              <p>
                Choose from over 20,000 online coaches. Use filters to narrow
                your search and find the perfect fit
              </p>
            </div>
          </div>
          <img src={woman} alt="" />
        </div>
        <div className="step">
          <div className="left">
            <div className="number">2</div>
            <div className="text__box">
              <h2>Take sessions anytime</h2>
              <p>
                Find the perfect time for your busy schedule. Book sessions in
                seconds.
              </p>
            </div>
          </div>
          <img src={calender} alt="" />
        </div>
        <div className="step">
          <div className="left">
            <div className="number">3</div>
            <div className="text__box">
              <h2>Enter a virtual room</h2>
              <p>
                When it’s session time, connect with your coach through our
                comprehensive video platform
              </p>
            </div>
          </div>
          <img src={virtuelRoom} alt="" />
        </div>
        <div className="step">
          <div className="left">
            <div className="number">4</div>
            <div className="text__box">
              <h2>Take advantage of our tools</h2>
              <p>
                Write down the most important things you got from the session,
                you goals for the week and everything you consider important.
              </p>
            </div>
          </div>
          <img src={tools} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
