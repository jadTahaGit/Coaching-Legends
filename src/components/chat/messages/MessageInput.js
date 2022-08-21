import React, { useEffect, useState } from "react";

const MessageInput = (props) => {
  const messageInputRef = React.createRef();
  const { message, setMessage } = useState("");
  const { isTyping, setIsTyping } = useState(false);

  let lastUpdateTime = "";
  let typingInterval = "";


  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
    setMessage("");
  };

  const sendMessage = () => {
    props.sendMessage(message);
  };

  useEffect(() => {
    return stopCheckingTyping();
  }, []);

  const sendTyping = () => {
    lastUpdateTime = Date.now();
    if (!isTyping) {
      setIsTyping(true);
      props.sendTyping(true);
      startCheckingTyping(lastUpdateTime);
    }
  };

  /*
   *	startCheckingTyping
   *	Start an interval that checks if the user is typing.
   */
  const startCheckingTyping = (lastUpdateTime) => {
    typingInterval = setInterval(() => {
      if (Date.now() - lastUpdateTime > 300) {
        setIsTyping(false);
        stopCheckingTyping(typingInterval);
      }
    }, 300);
  };

  /*
   *	stopCheckingTyping
   *	Start the interval from checking if the user is typing.
   */
  const stopCheckingTyping = (typingInterval) => {
    if (typingInterval) {
      clearInterval(typingInterval);
      props.sendTyping(false);
    }
  };

  return (
    <div className="message-input">
      <form onSubmit={handleSubmit} className="message-form">
        <input
          id="message"
          ref={messageInputRef}
          type="text"
          className="form-control"
          value={message}
          autoComplete={"off"}
          placeholder="Type something interesting"
          onKeyUp={(e) => {
            e.key !== "Enter" && sendTyping();
          }}
          onChange={({ target }) => {
            setMessage(target.value);
          }}
        />
        <button disabled={message.length < 1} type="submit" className="send">
          {" "}
          Send{" "}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
