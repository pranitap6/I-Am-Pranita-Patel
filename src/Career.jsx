import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Career() {
  return (
    <div class="row">
      <div class="col-md-4">
        <h5 style={{ textAlign: "justify" }}>
          IBM India Pvt Ltd | Bombardier Transportation
        </h5>
        <p style={{ textAlign: "justify" }}>June 2018 - Present</p>
      </div>
      <div class="col-md-8">
        <h5 style={{ paddingBottom: 10, textAlign: "justify" }}>
          Fulltime - Application Developer | SAP BASIS
        </h5>
        <ul class="Career-list">
          <li>
            <p style={{ marginBottom: 0 }}>
              Responsible for day to day maintenance activities.
            </p>{" "}
          </li>
          <li>
            <p style={{ marginBottom: 0 }}>
              Responsible for incident management and addressing queries raised
              from client-end.
            </p>
          </li>
          <li>
            <p style={{ marginBottom: 0 }}>
              Responsible for development and implementation of automation
              scripts for the systems.{" "}
            </p>
          </li>
          <li>
            <p style={{ marginBottom: 0 }}>
              Responsible for the documentation of processes, procedures, and
              plans, including changes, upgrades, and new services.
            </p>
          </li>
          <li>
            <p style={{ marginBottom: 0 }}>
              Responsible for troubleshooting of systems in case any problem
              arises
            </p>
          </li>
          <li>
            <p style={{ marginBottom: 0 }}>
              Responsible for the upgrade and patching activities as part of
              system maintenance{" "}
            </p>
          </li>
          <div style={{ paddingTop: 30 }}>
            <LocationOnIcon style={{ color: "#6886c5" }} />
            Bangalore
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Career;
