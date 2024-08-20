import "../styles/Footer.css";
import { IKImage, IKContext } from "imagekitio-react";
import { mobileCheck } from "../MobileCheck";

function Footer() {
  const isMobile = mobileCheck();

  return (
    <div className="justify-content-bottom">
      <div className="footer mt-auto d-flex justify-content-center align-items-center flex-column">
        <div className="card border-rounded p-2 m-4 shadow">
          <div className="card-body">
            <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
              <IKImage
                src="https://ik.imagekit.io/pbq9icsqc/logo-NO-lisc.webp?updatedAt=1720653473902"
                alt="company logo w/lic"
                loading="lazy"
                width="200"
                height="50"
              />
            </IKContext>
            <div className="ps-3">
              <h6 className="font-monospace">LIC# #824790 &nbsp; &nbsp;</h6>
              <a
                href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=824790"
                className={`fw-semibold ${isMobile ? "foot-link-mobile" : "foot-link"}`}
                target="_blank"
              >
                ✓ License Check
              </a>
              <p></p>
            </div>
          </div>
        </div>

        <div className="bottom-footer p-2 w-100"></div>
      </div>
    </div>
  );
}

export default Footer;
