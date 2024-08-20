import React from "react";
import Icon from "../assets/pipe.svg"; // Importing the SVG file
import IconRev from "../assets/pipeRev.svg"; // Importing the reversed SVG file
import "../styles/ServicesPrimer.css";

function ServicesPrimer() {
  return (
    <div className="card text-start p-2 m-4">
      <div className="d-flex justify-content-between services-tab p-2 rounded">
        <img
          src={Icon}
          alt="Icon"
          width="30"
          height="30"
          style={{
            filter:
              "brightness(100%) hue-rotate(0deg) invert(0%) saturate(100%) sepia(0%)",
            fill: "white",
          }}
        />
        <img
          src={IconRev}
          alt="IconReversed"
          width="30"
          height="30"
          style={{
            filter:
              "brightness(100%) hue-rotate(0deg) invert(0%) saturate(100%) sepia(0%)",
            fill: "red",
          }}
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">
          AttaPlumbing provides full-service plumbing in San Diego, handling
          anything from water pressure issues to busted pipes and clogged
          drains. We are experts at new installations as well as repairs,
          helping you select the best water heater for your residence or place
          of business. We can expertly install any type of water heater, whether
          you want a conventional model or a state-of-the-art tankless
          system.Our professional service team is always available to discuss
          personalized choices that meet your requirements. Our knowledgeable
          technicians will carefully install your new equipment and walk you
          through its capabilities once you've made your selection. As your
          go-to San Diego plumber, we make sure that before we depart, you can
          use your new system with complete confidence.
        </p>
      </div>
      <div className="d-flex justify-content-between services-tab p-2 rounded">
        <img
          src={IconRev}
          alt="IconReversed"
          width="30"
          height="30"
          style={{
            filter:
              "brightness(100%) hue-rotate(0deg) invert(0%) saturate(100%) sepia(0%)",
            fill: "red",
          }}
        />
        <img
          src={Icon}
          alt="Icon"
          width="30"
          height="30"
          style={{
            filter:
              "brightness(100%) hue-rotate(0deg) invert(0%) saturate(100%) sepia(0%)",
            fill: "white",
          }}
        />
      </div>
    </div>
  );
}

export default ServicesPrimer;
