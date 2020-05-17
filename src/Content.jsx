import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
function Content(props) {
  return (
    <div class="row Content">
      <div class="col-md-4">
        <h5 style={{ textAlign: "justify" }}>{props.header1}</h5>
        <p style={{ textAlign: "justify" }}>{props.header1Time}</p>
      </div>

      <div class="col-md-8">
        <h5 style={{ textAlign: "justify" }}>{props.header2}</h5>
        <p class="Content-block">
          {props.header2Content} <br /> <br />
          <LocationOnIcon style={{ color: "#6886c5" }} /> {props.location}
        </p>
      </div>
    </div>
  );
}

export default Content;
