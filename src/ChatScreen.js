import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "ellen",
      image:
        "https://admin.euro.savills.co.uk/_images/landscape-profile-images/btjones.jpg",
      message: "Whats up",
    },
    {
      name: "ellen",
      image:
        "https://admin.euro.savills.co.uk/_images/landscape-profile-images/btjones.jpg",
      message: "How are you",
    },
    { message: "Im fine wau" },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timeStamp">
        YOU MATCHED WITH ELLEN ON 10/11/21
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
