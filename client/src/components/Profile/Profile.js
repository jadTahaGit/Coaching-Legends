import "./Profile.scss";
import woman1 from "../../assets/coachProfile/woman1.png";
import americaFlag from "../../assets/coachProfile/america.svg";
import speaks from "../../assets/coachProfile/speaks.svg";
import arrow from "../../assets/coachProfile/arrow.svg";
import circle from "../../assets/coachProfile/circle.svg";
import star from "../../assets/coachProfile/star.svg";

const coachProfile = () => {
  const goToChatHandler = () => {
    window.location.href = "/chat";
  };

  return (
    <div className="CoachProfile">
      <div className="main">
        <div className="SummaryBox">
          <img src={woman1} alt="" />
          <div className="text-wrapper">
            <div className="title">
              <h2 className="Coach__Name">Kimberly C.</h2>
              <img src={americaFlag} alt="" className="flag" />
            </div>
            <p className="coach__type">Motivational Coach</p>
            <div className="unkown">
              <img src="" alt="" />
              <p className="unknown">unknown</p>
            </div>
            <div className="language">
              <img src={speaks} alt="" />
              <p>
                Speaks <span>English</span>
              </p>
              <div className="native">Nativ</div>
            </div>
          </div>
        </div>

        <nav className="mini-navbar">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Language</a>
            </li>
          </ul>
        </nav>

        <div className="About" id="About">
          <h1>About the tutor</h1>
          <p>
            Ultrices vel nulla odio pellentesque id placerat. Turpis nunc id
            quis aliquam commodo et, lectus id. Aenean diam porta sed quisque.
            Habitasse mi quis lobortis semper. Eleifend dolor duis nunc, nisi
            eget amet bibendum neque. Integer cras pretium nunc, sed rutrum.
            Arcu, aenean diam ac eu. Feugiat viverra diam praesent senectus
            malesuada. Sagittis, lectus ac sed integer phasellus. Faucibus
            tortor pulvinar eu nulla elit tristique metus, feugiat.
          </p>
          <a href="#">Show more</a>
        </div>

        <div className="Schedule" id="Schedule">
          <h1>Schedule</h1>
          <h3>I have taught both in one on one and group settings.</h3>
          <div className="info__timezone">
            <img src="" alt="" />
            Choose the time for your first lesson. The timings are displayed in
            your local timezone.
          </div>
        </div>

        <div className="Languages" id="Languages">
          <h1>Languages</h1>
          <div className="language">
            <span className="languageName">English</span>
            <span className="languageLevel"> Native/Bilingual</span>
          </div>
          <div className="language">
            <span className="languageName">Arabic</span>
            <span className="languageLevel"> Native/Bilingual</span>
          </div>
        </div>

        <div className="Resume" id="Resume">
          <h1>Resume</h1>
          <div className="Education">
            <div className="edu-1">
              <div className="time__intervel">2019-2022</div>
              <div className="text-wrapper">
                <p>International Open Academy</p>
                <p>TESOL</p>
              </div>
            </div>
            <div className="edu-2">
              <div className="time__intervel">2019-2022</div>
              <div className="text-wrapper">
                <p>International Open Academy</p>
                <p>TESOL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right__sidebar">
        <div className="image__wrapper"></div>
        <div className="quickBox">
          <div className="info">
            <div className="smallInfo">
              <p>Newly</p>
              <p>Joined</p>
            </div>
            <div className="wage">
              <p>$13 </p>
              <p>per hour</p>
            </div>
          </div>
          <button className="trailSession">Book A Trail Session</button>
          <button onClick={goToChatHandler} className="message">
            Send message
          </button>
          <button className="saveToMyList">Save To My List</button>

          <div className="bookedLessons">
            <img src={arrow} alt="" />
            <p>19 lessons booked in the last 48 hours</p>
          </div>

          <div className="response">
            <img src={circle} alt="" />
            <p>
              Usually responds in <span>2</span> hrs
            </p>
          </div>
        </div>

        <div className="popularity">
          <img src={star} alt="" />
          <div className="text__Box">
            <p>Super popular</p>
            <p>24 people contacted this coach in the last 48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default coachProfile;
