import React from "react";
import SocialMedia from "./SocialMedia";

function Contact() {
  return (
    <div>
      <div className="Contact" id="contacts">
        <div>
          <h2 style={{ marginBottom: 20, color: "#fffdf9" }}>Contacts</h2>
          <p class="Contact-para">
            “I think insomnia is a sign that a person is interesting.”
            <br /> ― Avery Sawyer
          </p>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Contact;
