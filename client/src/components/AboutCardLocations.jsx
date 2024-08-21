import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import "../styles/AboutCard.css";

function AboutCardLocations({
  imageSrc,
  title,
  locations,
  imageWidth,
  imageHeight,
}) {
  imageWidth = 300; // Replace with actual width of the image
  imageHeight = 200; // Replace with actual height of the image
  return (
    <div className="card" style={{ maxWidth: "45em" }}>
      <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
        <IKImage
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="card-img-top"
          height={imageHeight}
          width={imageWidth}
          style={{ objectFit: "cover" }}
        />
      </IKContext>
      <div className="card-body" style={{padding: "0px"}}>
        <h5 className="card-header card-header-background text-center heard-text card-title heard-text border-top-0 border-custom">
          {title}
        </h5>
        <ul className="list-group list-group-flush border-top-0 border-custom rounded-bottom">
          {locations.map((city) => (
            <li className="list-group-item text-center" key={city}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutCardLocations;
