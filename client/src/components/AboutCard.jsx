import React from "react";
import { IKImage, IKContext } from "imagekitio-react";
import "../styles/AboutCard.css";

function AboutCard({ imageSrc, title, text, imageWidth, imageHeight }) {
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
      <div className="card-body" style={{ padding: "0px" }}>
        <h5 className="card-header text-center card-header-background card-title heard-text border-top-0 border-custom">
          {title}
        </h5>
        <p className="card-text border-top-0 border-custom rounded-bottom p-2 ">
          {text}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
