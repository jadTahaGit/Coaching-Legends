import "./QuoteSecion.scss";
import topLeftQuatation from "./../../assets/coach/QuoteSection/topLeftQuatation.svg";
import bottomRightQuatation from "./../../assets/coach/QuoteSection/bottomRightQuatation.svg";

import girl from "./../../assets/coach/QuoteSection/girl.png";

const QuoteSection = () => {
  return (
    <div className="QuoteSection">
      <img src={girl} alt="" />
      <div className="right">
        <img src={topLeftQuatation} alt="" />
        <h1>It allowed me to make a living without leaving home!</h1>
        <img src={bottomRightQuatation} alt="" />

        <p>Jenna coaches with us so she can spend more time with her family</p>
        <button>Become A Coach</button>
      </div>
    </div>
  );
};

export default QuoteSection;
