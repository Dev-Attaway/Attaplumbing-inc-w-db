import { Link } from "react-router-dom";
import "../styles/Services.css";
import { IKImage, IKContext } from "imagekitio-react";

// Define the Project component
function ServiceOption({
  title_0,
  service_primer_0,
  title_1,
  service_primer_1,
  title_2,
  service_primer_2,
  title_3,
  service_primer_3,
  title_4,
  service_primer_4,
}) {
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
          <h5 className="card-title">{title_0}</h5>
          <p className="card-text">{service_primer_0}</p>
          <h5 className="card-title">{title_1}</h5>
          <p className="card-text">{service_primer_1}</p>
          <h5 className="card-title">{title_2}</h5>
          <p className="card-text">{service_primer_2}</p>
          <h5 className="card-title">{title_3}</h5>
          <p className="card-text">{service_primer_3}</p>
          <h5 className="card-title">{title_4}</h5>
          <p className="card-text">{service_primer_4}</p>
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
