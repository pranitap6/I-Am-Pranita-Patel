import React from "react";
import Ability from "./Abilities";
function Skills() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#fffdf9" }}
        className="Education"
        id="skills"
      >
        <div className="Education-heading">
          <h2 style={{ marginBottom: 20 }}>Abilities</h2>
          <p class="Education-para">
            “Skill without imagination is craftsmanship and gives us many useful
            objects such as wickerwork picnic baskets. Imagination without skill
            gives us modern art.”
            <br /> ― Tom Stoppard
          </p>
        </div>
        <h3 style={{ marginBottom: 30 }}>Skills & Tools</h3>
        <Ability />
      </div>
    </div>
  );
}

export default Skills;
