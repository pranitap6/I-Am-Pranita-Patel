import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
function SocialMedia() {
  return (
    <div class="social-row row">
      <div class="social-links col-sm-6">
        <ul class="no-bullets">
          <li>
            <a href="http://linkedin.com/in/pranita-patel">
              <LinkedInIcon /> linkedin.com/in/pranita-patel
            </a>
          </li>
          <li>
            <a href=" ">
              <EmailIcon /> pranitap6@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div class="col-sm-6 social-links">
        <ul class="no-bullets">
          <li>
            <a href="https://github.com/pranitap6">
              <GitHubIcon /> https://github.com/pranitap6
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialMedia;
