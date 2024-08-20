import Yelp from "../components/Yelp";
import ContactTab from "../components/ContactTab";
import BuildZoom from "../components/BuildZoom";
import AboutCard from "../components/AboutCard";
import "../styles/About.css";

function AboutTheCompany() {
  return (
    <>
      <div className="container-fluid p-4">
        {/* Card Section */}
        <div className="row gy-3 justify-content-center">
          <div className="col-md-4">
            <AboutCard
              imageSrc="https://ik.imagekit.io/pbq9icsqc/pexels-wdnet-14953886.webp?updatedAt=1720653473873"
              title="About the Company"
              text="AttaPlumbing can assist with any plumbing problem you may be experiencing. 
              With 22 years of experience in the industry, we provide exceptional residential 
              and commercial plumbing services throughout San Diego. Whether you're facing issues 
              with your home's sewer line, fireplace retrofit, or gas line re-piping, AttaPlumbing 
              is your trusted specialist. Our skilled technicians are equipped to handle and resolve
               any plumbing challenge you encounter."
            />
          </div>
          <div className="col-md-4">
            <AboutCard
              imageSrc="https://ik.imagekit.io/pbq9icsqc/pexels-magda-ehlers-pexels-3721272.webp?updatedAt=1720653474324"
              title="Card title"
              text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            />
          </div>
          <div className="col-md-4">
            <AboutCard
              imageSrc="https://ik.imagekit.io/pbq9icsqc/vecteezy_ai-generated-beautiful-photography-for-plumbing-services_38813454.webp?updatedAt=1720653474196"
              title="Card title"
              text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="container reviews mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-center">
              <Yelp />
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <BuildZoom />
            </div>

            <div className="d-flex justify-content-center">
              <ContactTab />
            </div>
          </div>
          {/* Contact Tab */}
        </div>
      </div>
    </>
  );
}

export default AboutTheCompany;
