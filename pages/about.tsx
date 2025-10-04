import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <p>
        This project was created as part of an assignment for learning advanced 
        front-end development concepts.
      </p>
      <p>
        It uses React with Next.js to build a simple multi-page application. 
        Each page demonstrates different concepts such as navigation, state 
        management, event handling, conditional rendering, and CSS styling.
      </p>
      <p>
        The goal is to get comfortable with how React applications are structured 
        and how Next.js makes it easy to create multi-page apps with server-side 
        rendering and routing built in.
      </p>
    </div>
  );
}
