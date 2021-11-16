import { Avatar } from "@material-ui/core";
import "./chat.css";
import React from "react";
import { Link } from "react-router-dom";

function Chat({ name, message, imageUrl, timestamp }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={imageUrl} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
