import React from "react";
import Content from "./Content";
import Theory from "./Theory";
import Career from "./Career"
function Education() {
  return (
    <div>
      <div className="Education" id = "education">
        <div className="Education-heading">
          <h2 style={{ marginBottom: 20 }}>Experiences</h2>
          <p class="Education-para">
            “in order to change an existing imagined order, we must first
            believe in an alternative imagined order.”
            <br /> ― Yuval Noah Harari
          </p>
        </div>
        <h3 style={{ marginBottom: 30 }}>Education</h3>
        {Theory.map(Result => {
          return (
            <Content
              header1={Result.heading}
              header1Time={Result.time}
              header2={Result.subHeading}
              header2Content={Result.content}
              location={Result.location}
            />
          );
        })}
        <div style={{ borderBottom: "solid 2px #6886c5" }} />
        <h3 style={{ marginTop: 30, marginBottom: 30 }}>Career</h3>
        <Career />
      </div>
    </div>
  );
}

export default Education;
