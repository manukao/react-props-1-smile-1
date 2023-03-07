import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
      <Smiley isHappy={true} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return (
    <div role="img" aria-label={isHappy ? "happy" : "sad"}>
      {isHappy ? "😊" : "😔"}
    </div>
  );
}
