import React from "react";
import Icon from "../assets/pipe.svg"; // Importing the SVG file
import IconRev from "../assets/pipeRev.svg"; // Importing the reversed SVG file
import "../styles/ServicesPrimer.css";

function ServicesPrimer() {
  return (
    <div className="card text-start p-2">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          laborum ad ratione inventore, doloremque nulla quidem illo earum
          fugit, incidunt, reiciendis obcaecati. Nihil distinctio molestias
          dignissimos, velit inventore commodi quos.
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
