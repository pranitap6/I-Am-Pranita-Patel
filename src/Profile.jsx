import React from "react";

function Profile() {
  return (
    <div class="profile" id = "profile">
      <div class="profile-body">
        <div class="profile-heading">
          <h2>Profile</h2>
          <p style={{ fontSize: 20 }}>I am a passionate Web Developer</p>
        </div>
        <div class="row">
          <div class="col-sm">
            <h3>About me</h3>
            <p>
              "I am a web developer with good analytical and problem-solving
              skiils , I am an allround web developer. I believe in the system
              of collective learning, we learn and grow faster as part of a team
              than as a single entity. "
            </p>
          </div>
          <div class="col-sm Image">
            <img
              src="images/profile.jpg"
              height="250"
              width="200"
              alt="Pranita-Patel"
            />
          </div>
          <div class="col-sm">
            <h3>Details</h3>
            <p>
              <h5>Name</h5>
              <h6>Pranita Patel</h6>
              <h5>Age</h5>
              <h6>23</h6>
              <h5>Location</h5>
              <h6>India</h6>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
