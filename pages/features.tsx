import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Counter from "../components/counter";
import Message from "../components/message";

export default function Features() {
  const [showFeature, setShowFeature] = useState(false);

  return (
    <div>
      <Navbar />
      <h1>Features Page</h1>
      <p>Click the button below to reveal a cool feature.</p>

      <button onClick={() => setShowFeature(!showFeature)}>
        {showFeature ? "Hide Feature" : "Show Feature"}
      </button>

      {showFeature && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid black" }}>
          <h2>Feature</h2>
          <p>This is conditional rendering in action.</p>
        </div>
      )}

      <Counter />
      <Message initialText="" />
    </div>
  );
}
