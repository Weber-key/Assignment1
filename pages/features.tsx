import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import Message from "../components/Message";
export default function Features() {
  // State to toggle showing/hiding the feature box
  const [showFeature, setShowFeature] = useState(false);

  return (
    <div>
      <Navbar />
      <h1>Features Page</h1>
      <p>Click the button below to reveal a cool feature.</p>

      {/* Button updates state when clicked */}
      <button onClick={() => setShowFeature(!showFeature)}>
        {showFeature ? "Hide Feature" : "Show Feature"}
      </button>

      {/* Conditional rendering: only show this section if showFeature is true */}
      {showFeature && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid black" }}>
          <h2>Feature</h2>
          <p>This is conditional rendering in action.</p>
        </div>
      )}

    {/* Imported components that handle their own state/props */}
      <Counter />
      <Message initialText="" />
    </div>
  );
}
