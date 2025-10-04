import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to My React App!</h1>
      <p>This is the home page of our simple Next.js project.</p>
      <p>
        Use the navigation menu above to explore the About and Features pages. 
        This app demonstrates the basics of React and Next.js, including 
        components, props, state, event handling, and conditional rendering.
      </p>
      <p>
        You can think of this page as the "front door" of the application, where 
        users first arrive before checking out other sections.
      </p>
    </div>
  );
}
