import React, { useState } from "react";

export default function Message({ initialText }) {
  // State to track message typed by the user
  const [message, setMessage] = useState(initialText);

  return (
    <div>
      <h2>Message Component</h2>
      {/* Input updates state on change */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />

      {/* Conditional rendering shows different output based on state */}
      {message ? <p>You typed: {message}</p> : <p>No message entered yet.</p>}
    </div>
  );
}
