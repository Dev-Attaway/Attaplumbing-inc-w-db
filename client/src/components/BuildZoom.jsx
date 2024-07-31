import "../styles/BuildZoomReviews.css";
import { IKImage, IKContext } from "imagekitio-react";
import { mobileCheck } from "../MobileCheck";

export default function BuildZoomReviews() {
  const isMobile = mobileCheck();

  return (
    <div className="p-2 justify-content-center d-flex">
      <div
        className="shadow card p-3 m-3"
        style={{ width: "15rem", height: "20rem" }}
      >
        <div className="mt-auto p-2 d-flex justify-content-center align-items-center flex-column">
          <h5>Also, checkout our page on</h5>
          <a
            href={`https://www.buildzoom.com/contractor/atta-plumbing-inc`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
              <IKImage
                src="https://ik.imagekit.io/pbq9icsqc/Buildzoom.webp?updatedAt=1720653474213"
                alt="BuildZoom Logo"
                className={`${isMobile ? "" : "buildZoom-logo-image"}`}
                loading="lazy"
                width="200"
                height="150"
              />
            </IKContext>
          </a>
        </div>
        <div className="card mb-1">
          <div className="card-body d-flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#3f88c5ff"
              className="bi bi-star"
              viewBox="0 0 18 18"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#3f88c5ff"
              className="bi bi-star"
              viewBox="0 0 18 18"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#3f88c5ff"
              className="bi bi-star"
              viewBox="0 0 18 18"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#3f88c5ff"
              className="bi bi-star"
              viewBox="0 0 18 18"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#3f88c5ff"
              className="bi bi-star"
              viewBox="0 0 18 18"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
