import React, { useState } from "react";

type MessageProps = {
  initialText: string;
};

export default function Message({ initialText }: MessageProps) {
  const [message, setMessage] = useState(initialText);

  return (
    <div>
      <h2>Message Component</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      {message ? <p>You typed: {message}</p> : <p>No message entered yet.</p>}
    </div>
  );
}
