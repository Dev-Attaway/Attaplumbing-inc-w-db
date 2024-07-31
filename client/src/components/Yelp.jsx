import "../styles/YelpReviews.css";
import { IKImage, IKContext } from "imagekitio-react";
import { mobileCheck } from "../MobileCheck";

export default function YelpReviews() {
  const isMobile = mobileCheck();
  return (
    <div className="p-2 justify-content-center">
      <div
        className="shadow card p-3 m-3"
        style={{ width: "15rem", height: "20rem" }}
      >
        <div className="mt-auto p-3 justify-content-center align-items-baseline flex-wrap">
          <h5>Check out our page on</h5>
          <a
            href={"https://www.yelp.com/biz/atta-plumbing-chula-vista"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
              <IKImage
                src="https://ik.imagekit.io/pbq9icsqc/vecteezy_yelp-logo-png-yelp-icon-transparent-png_27127534.webp?updatedAt=1720653474275"
                alt="yelp logo image"
                className={`${isMobile ? "" : "yelp-logo-image"}`}
                width="150"
                height="100"
              />
            </IKContext>
          </a>
        </div>
        <div className="card">
          <div className="card-header">Based on 17 reviews</div>
          <div className="card-body text-center">
            <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
              <IKImage
                src="https://ik.imagekit.io/pbq9icsqc/Review_Ribbon_medium_20_5.WebP?updatedAt=1720734314067"
                alt="yelp star rating"
                loading="lazy"
                width="100"
                height="25"
              />
            </IKContext>
          </div>
        </div>
      </div>
    </div>
  );
}
