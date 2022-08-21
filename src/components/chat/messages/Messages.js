import React, { useEffect } from "react";

const Messages = ({ messages, user, typingUsers }) => {
  const containerRef = React.createRef();

  const scrollDown = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollDown();
  }, []);

  return (
    <div ref={containerRef} className="thread-container">
      <div className="thread">
        {messages.map((mes) => {
          return (
            <div
              key={mes.id}
              className={`message-container ${
                mes.sender === user.username && "right"
              }`}
            >
              <div className="time">{mes.time}</div>
              <div className="data">
                <div className="message">{mes.message}</div>
                <div className="name">{mes.sender}</div>
              </div>
            </div>
          );
        })}
        {typingUsers.map((name) => {
          return (
            <div key={name} className="typing-user">
              {`${name} is typing . . .`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
