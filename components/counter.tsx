import React, { useState } from "react";

export default function Counter() {
  // State to track current count
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Current count: {count}</p>

      {/* Event handlers update state */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
