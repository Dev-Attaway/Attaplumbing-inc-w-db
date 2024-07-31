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
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default AboutCard;
