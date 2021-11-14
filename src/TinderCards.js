import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url: "",
    },
    {
      name: "Ravana",
      url: "",
    },
  ]);
  return (
    <div>
      <h1>TinderCard</h1>

      {people.map((person) => (
        <TinderCard />
      ))}
    </div>
  );
}

export default TinderCard;
