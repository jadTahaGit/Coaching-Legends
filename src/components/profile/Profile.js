import './Profile.scss';
import woman1 from '../../assets/coachProfile/woman1.png';
import americaFlag from '../../assets/coachProfile/america.svg';
import speaks from '../../assets/coachProfile/speaks.svg';
import arrow from '../../assets/coachProfile/arrow.svg';
import circle from '../../assets/coachProfile/circle.svg';
import star from '../../assets/coachProfile/star.svg';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Star from '../../assets/service/star.svg';

import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import UpdateUserInfoForm from '../form/UpdateUserInfoForm';

const CoachProfile = () => {
  const [values, setValues] = useState({
    username: 'Default',
    coachType: 'Gym Instructor',
    profileImage: woman1,
  });
  const [isEditable, setIsEditable] = useState(false);

  const goToChatHandler = () => {
    window.location.href = '/chat';
  };

  const editProfileHandler = () => {
    setIsEditable((prevState) => !prevState);
  };

  const handleChange = (values) => {
    setValues(values);
  };

  return (
    <div className="CoachProfile">
      <div className="main">
        <div className="SummaryBox">
          <EditIcon onClick={editProfileHandler} className="EditIcon" />
          {isEditable ? (
            <UpdateUserInfoForm
              uname={values.username}
              ctype={values.coachType}
              pImage={values.profileImage}
              onUpdate={handleChange}
              onClose={editProfileHandler}
            />
          ) : (
            ''
          )}

          <img src={values.profileImage} alt="" />
          <div className="text-wrapper">
            <div className="title">
              <h2 className="Coach__Name">{values.username}</h2>
              <img src={americaFlag} alt="" className="flag" />
            </div>
            <p className="coach__type">{values.coachType}</p>
            
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
            <div className="languageContainer">
              <img src={speaks} alt="" />
              <p>
                Speaks <span>English</span>
              </p>
              <div className="native">Native</div>
            </div>
          </div>
        </div>

        <nav className="mini-navbar">
          <ul>
            <li>
              <a href="#description">Description</a>
            </li>
            <li>
              <a href="#languages">Languages</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#certifications">Certifications</a>
            </li>
            <li>
              <a href="#linkedAccounts">Linked Accounts</a>
            </li>
          </ul>
        </nav>

        <div className="About" id="description">
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            sunt error, placeat culpa cupiditate adipisci blanditiis, sit
            aspernatur inventore voluptas nulla dolor! Repudiandae, incidunt.
            Ad nisi dolorem perferendis alias dignissimos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Necessitatibus quisquam
            inventore tempora! Amet eius quasi perferendis fugiat eligendi
            velit ea maxime pariatur iusto. Illum quasi maiores architecto sit
            laboriosam sunt.
          </p>
        </div>

        <div className="About" id="languages">
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

        <div className="About" id="skills">
          <h1>Skills</h1>
          <div className='skills'>
            <span>Goal setting</span>
            <span>Psychological</span>
            <span>Counseling</span>
            <span>Mindset Coaching</span>
            <span>Mental Health</span>
          </div>
        </div>

        <div className="About" id="education">
          <h1>Education</h1>
          <div className='education'>
            <div className='educationInfo'>B.Sc. - Psychology</div>
            <div className='educationOrganisation'>Faculty of philosophy, University of Nis, Serbia, Graduated 2017</div>
          </div>
        </div>

        <div className="About" id="certifications">
          <h1>Certifications</h1>
          <div className='education'>
            <div className='educationInfo'>TEFL Certificate</div>
            <div className='educationOrganisation'>theteflcertificate.com</div>
          </div>
        </div>

        <div className="About" id="linkedAccounts">
          <h1>Linked Accounts</h1>
          <div className='linkedAccounts'>
            <div className='linkedAccount'><GoogleIcon /> Google</div>
            <div className='linkedAccount'><FacebookIcon /> Facebook</div>
          </div>
        </div>
        
      </div>
      <div className="right__sidebar">
        <div className="image__wrapper"></div>
        <div className="quickBox">
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

export default CoachProfile;
