import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { IKImage, IKContext } from "imagekitio-react";
import { mobileCheck } from "../MobileCheck";
import "../styles/ContactTab.css";

function ContactTab() {
  const match = useMatch("/Contact");
  const isContactPage = match !== null;
  const isMobile = mobileCheck();

  return (
    <div className="card m-3 p-3" style={{ minWidth: "25rem" }}>
      <div className="card-body mx-auto">
        <div className="col">
          <div className="d-flex align-items-center justify-content-center">
            <h2 className="mb-0">Contact</h2>
            <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
              <IKImage
                src="https://ik.imagekit.io/pbq9icsqc/logo-NO-lisc.webp?updatedAt=1720653473902?tr=w-200,h-50"
                alt="Attaplumbing Company logo"
                loading="lazy"
                width="200"
                height="50"
                className="ms-2"
              />
            </IKContext>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center justify-content-center mt-3">
            <h2 className="mb-0">Today at</h2>
            <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
              <IKImage
                src="https://ik.imagekit.io/pbq9icsqc/company-phone.webp?updatedAt=1720653473588?tr=w-200,h-50"
                alt="Company phone"
                loading="lazy"
                width="200"
                height="50"
                className="ms-2"
              />
            </IKContext>
          </div>
        </div>
        {!isContactPage && (
          <div className="text-center mt-3">
            <h2>
              Or through our&nbsp;→&nbsp;
              <Link
                className={`fw-semibold ${isMobile ? "contact-link-mobile" : "contact-link"}`}
                to="/Contact"
              >
                Contact Page
              </Link>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactTab;
