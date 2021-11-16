import { Avatar } from "@material-ui/core";
import "./chat.css";
import React from "react";

function Chat({ name, message, imageUrl, timeStamp }) {
  return (
    <div className="chat">
      <Avatar className="chat__image" alt={name} src={imageUrl} />
      <div>
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p>{timeStamp}</p>
    </div>
  );
}

export default Chat;
