import ideal from '../../assets/home/ideal.svg';
import woman from '../../assets/services/woman.jpg';
import './ChatSidebar.scss';

const ChatSidebar = (props) => {
  return (
    <div className="left__sidebar">
      <div className="headOf__sidebar">
        <img src={woman} alt="" className="profile__photo" />
        <div className="right__options">
          <input
            type="search"
            className="search__for__users"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="mainOf__sidebar">
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
        <div className="chat__overview">
          <img src={ideal} alt="" className="profile__photo" />
          <div className="textBox">
            <p className="contactName">Pedro</p>
            <p className="lastMessage">Fuck The Week!</p>
          </div>
          <div className="imortant__info">
            <span className="timeSent">11:05</span>
            <span className="unread__messages">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
