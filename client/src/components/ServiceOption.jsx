import { Link } from "react-router-dom";
import "../styles/Services.css";
import { IKImage, IKContext } from "imagekitio-react";

// Define the Project component
function ServiceOption({ title, service_primer }) {
  return (
    <div className="services-child-page">
      <div className="card d-flex flex-row flex-wrap align-items-center">
        <div className="col-md-4 d-flex justify-content-center p-2">
          <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
            <IKImage
              src="https://ik.imagekit.io/pbq9icsqc/default.webp?updatedAt=1720653474160"
              alt="basic example"
              className="img-fluid rounded"
              loading="lazy"
            />
          </IKContext>
        </div>
        <div className="col-md-8 card-body d-flex flex-column justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{service_primer}</p>
          <Link to="/Contact" className="mt-2">
            <button type="button" className="btn btn-custom fw-medium">
              Contact us for a Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceOption;
