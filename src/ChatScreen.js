import React, { useState } from "react";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "ellen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sam_Rockwell_%2851492%29_%28cropped%29.jpg/1200px-Sam_Rockwell_%2851492%29_%28cropped%29.jpg",
      message: "Whats up",
    },
    {
      name: "ellen",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sam_Rockwell_%2851492%29_%28cropped%29.jpg/1200px-Sam_Rockwell_%2851492%29_%28cropped%29.jpg",
      message: "Whats up",
    },
    { message: "Whats up" },
  ]);
  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH ELLEN ON 10/11/21</p>
    </div>
  );
}

export default ChatScreen;
