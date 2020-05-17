import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import Skills from "./skills";
import { tools } from "./skills";
var number = [];
var number2 = [];

function Ability() {
  Skills.map(result => {
    return number.push(result.rating);
  });
  tools.map(result => {
    return number2.push(result.rating);
  });
  return (
    <div class="row">
      <div class="col-md-3">
        {Skills.map(result => {
          return <div class="Skills-content">{result.subject}</div>;
        })}
      </div>
      <div class="col-md-3">
        {number.map(result => {
          return (
            <div class="star-group">
              {[...Array(result)].map(star => {
                return <StarRateIcon className="star" />;
              })}
            </div>
          );
        })}
      </div>
      <div style={{ paddingTop: 5 }} class="col-md-3">
        {tools.map(result => {
          return (
            <div style={{ marginRight: 5 }} class="Skills-content">
              {result.subject}
            </div>
          );
        })}
      </div>
      <div class="col-md-3">
        {number2.map(result => {
          return (
            <div>
              {[...Array(result)].map(star => {
                return <StarRateIcon className="star" />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ability;
