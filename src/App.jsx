import React from "react";
import Intro from "./Introduction";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills.jsx";
import Contact from "./Contacts";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Intro />
      </div>
      <div class="container">
        <Profile />
        <Education />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
