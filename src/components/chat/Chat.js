import "./Chat.scss";
import io from "socket.io-client";
import woman from "../../assets/services/woman.jpg";
import verified from "../../assets/home/verified.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  USER_CONNECTED,
  PRIVATE_MESSAGE,
  TYPING,
  MESSAGE_SENT,
  MESSAGE_RECEIVED,
  LOGOUT,
} from "./Events";
import ChatSidebar from "./ChatSidebar";

const Chat = () => {
  const location = useLocation();
  const { seller } = location.state;

  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [socket, setSocket] = useState(null);

  const [socketInfo, setSocketInfo] = useState({
    id: "",
    socketId: null,
    username: "Ali",
  });

  const initSocket = () => {
    const socket = io("http://localhost:3001");
    setSocket(socket);
    socket.on("connect", (message) => {
      console.log("Connected");
    });
    socket.emit(USER_CONNECTED, socketInfo.username, setInfoFromSocket);
    socket.on(PRIVATE_MESSAGE, addChat);
  };

  useEffect(() => {
    initSocket();
  }, []);

  const setInfoFromSocket = (info) => {
    console.log(info.id + " " + info.username + " " + info.socketId);
    setSocketInfo(info);
  };

  /*
   * 	Returns a function that will
   *	add message to chat with the chatId passed in.
   *
   * 	@param chatId {number}
   */
  const addMessageToChat = (chatId) => {
    return (message) => {
      let newChats = chats.map((chat) => {
        if (chat.id === chatId) chat.messages.push(message);
        return chat;
      });

      setChats(newChats);
    };
  };

  /*
   *	Updates the typing of chat with id passed in.
   *	@param chatId {number}
   */
  const updateTypingInChat = (chatId) => {
    return ({ isTyping, user }) => {
      if (user !== socketInfo.username) {
        let newChats = chats.map((chat) => {
          if (chat.id === chatId) {
            if (isTyping && !chat.typingUsers.includes(user)) {
              chat.typingUsers.push(user);
            } else if (!isTyping && chat.typingUsers.includes(user)) {
              chat.typingUsers = chat.typingUsers.filter((u) => u !== user);
            }
          }
          return chat;
        });
        setChats(newChats);
      }
    };
  };

  /*
   *	Adds a message to the specified chat
   *	@param chatId {number}  The id of the chat to be added to.
   *	@param message {string} The message to be added to the chat.
   */
  const sendMessage = (chatId, message) => {
    socket.emit(MESSAGE_SENT, { chatId: chatId, message: message });
  };

  /*
   *	Sends typing status to server.
   *	chatId {number} the id of the chat being typed in.
   *	typing {boolean} If the user is typing still or not.
   */
  const sendTyping = (chatId, isTyping) => {
    socket.emit(TYPING, { chatId: chatId, isTyping: isTyping });
  };

  const setNewActiveChat = (newActiveChat) => {
    setActiveChat(newActiveChat);
  };

  const addChat = (chat, reset = false) => {
    const newChats = reset ? [chat] : [...chats, chat];
    const newActiveChat = reset ? chat : activeChat;
    setChats(newChats);
    setActiveChat(newActiveChat);

    const messageEvent = `${MESSAGE_RECEIVED}-${chat.id}`;
    const typingEvent = `${TYPING}-${chat.id}`;

    socket.on(typingEvent, updateTypingInChat(chat.id));
    socket.on(messageEvent, addMessageToChat(chat.id));
  };

  return (
    <>
      <div className="Chat">
        <ChatSidebar />

        <div className="main__chat">
          <div className="headOf__mainChat">
            <img src={verified} alt="" className="profile__photo" />
            <div className="textbox">
              <div className="contactName">{seller}</div>
              <div className="contact__name__info">
                <div className="lastSeen">
                  <span>Last seen: 17:42</span>
                </div>
                <div className="localTime">
                  <span>Local time: 18:30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bodyOF__mainChat">
            <div className="message__box__container reverse">
              <div className="profile__pic__content">
                <img src={woman} alt="" className="profile__photo" />
              </div>
              <div className="message__box__content">
                <div className="message__box sent">
                  Hey Man how are you doing?{" "}
                </div>
                <div className="message__box sent">I am Jad</div>
                <div className="message__box sent">.</div>
              </div>
            </div>
            <div className="message__box__container">
              <div className="profile__pic__content">
                <img src={verified} alt="" className="profile__photo" />
              </div>
              <div className="message__box__content">
                <div className="message__box received">Hey</div>
                <div className="message__box received">
                  Ready for today's session?.
                </div>
              </div>
            </div>
            <div className="message__box__container reverse">
              <div className="profile__pic__content">
                <img src={woman} alt="" className="profile__photo" />
              </div>
              <div className="message__box__content">
                <div className="message__box sent">Oh yeah!</div>
                <div className="message__box sent">I am so excited</div>
              </div>
            </div>
            <div className="message__box__container">
              <div className="profile__pic__content">
                <img src={verified} alt="" className="profile__photo" />
              </div>
              <div className="message__box__content">
                <div className="message__box received">So let's start</div>
              </div>
            </div>
            <div className="message__box__container reverse">
              <div className="profile__pic__content">
                <img src={woman} alt="" className="profile__photo" />
              </div>
              <div className="message__box__content">
                <div className="message__box sent">
                  Hey Man how are you doing?{" "}
                </div>
                <div className="message__box sent">
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum
                </div>
                <div className="message__box sent">.</div>
              </div>
            </div>
            <div className="message__box__container">
              <div className="profile__pic__content">
                <img src={verified} alt="" className="profile__photo" />
              </div>
              <div className="message__box__content">
                <div className="message__box received">Hey</div>
                <div className="message__box received">
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum
                </div>
              </div>
            </div>
            <div className="message__box__container reverse">
              <div className="profile__pic__content">
                <img src={woman} alt="" className="profile__photo" />
              </div>
              <div className="message__box__content">
                <div className="message__box sent">Oh yeah!</div>
                <div className="message__box sent">I am so excited</div>
              </div>
            </div>
            <div className="message__box__container">
              <div className="profile__pic__content">
                <img src={verified} alt="" className="profile__photo" />
              </div>
              <div className="message__box__content">
                <div className="message__box received">So let's start</div>
              </div>
            </div>
          </div>
          <div className="footerOf__mainChat">
            <div className="form-group">
              <input
                type="text"
                className="new__message__input"
                placeholder="Message"
              />
              <button className="btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
