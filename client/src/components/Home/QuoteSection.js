import topLeftQuatation from "./../../assets/Home/QuoteSection/topLeftQuatation.svg";
import bottomRightQuatation from "./../../assets/Home/QuoteSection/bottomRightQuatation.svg";
import girl from "./../../assets/Home/QuoteSection/woman.png";
import "./QuoteSection.scss";
const QuoteSection = () => {
  return (
    <div className="QuoteSection">
      <img src={girl} alt="" />
      <div className="right">
        <img src={topLeftQuatation} alt="" />
        <h1>It allowed me to make a living without leaving home!</h1>
        <img src={bottomRightQuatation} alt="" />

        <p>Jenna coaches with us so she can spend more time with her family</p>
        <button>JOIN</button>
      </div>
    </div>
  );
};

export default QuoteSection;
