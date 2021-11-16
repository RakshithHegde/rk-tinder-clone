import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat name="Mark" message="Sup" timestamp="1 min ago" />
    </div>
  );
}

export default Chats;
