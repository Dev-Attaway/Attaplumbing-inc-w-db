import { useState } from "react";
import ServicesPrimer from "../components/ServicesPrimer";
import ServiceOption from "../components/ServiceOption";
import ServiceOptionRemodel from "../components/ServiceOptionRemodel";
import "../styles/Services.css";
import { mobileCheck } from "../MobileCheck";

export default function Services() {
  const [buttonStates, setButtonStates] = useState({
    "btn-1": { isDisabled: false, text: "Show" },
    "btn-2": { isDisabled: false, text: "Show" },
    "btn-3": { isDisabled: false, text: "Show" },
    "btn-4": { isDisabled: false, text: "Show" },
    "btn-5": { isDisabled: false, text: "Show" },
    "btn-6": { isDisabled: false, text: "Show" },
    "btn-7": { isDisabled: false, text: "Show" },
    "btn-8": { isDisabled: false, text: "Show" },
  });

  const isMobile = mobileCheck();

  const handleButtonClick = (buttonId) => {
    if (buttonStates[buttonId].isDisabled) return; // Prevent action if button is disabled

    setButtonStates((prevStates) => ({
      ...prevStates,
      [buttonId]: {
        ...prevStates[buttonId],
        isDisabled: true,
        text: prevStates[buttonId].text === "Show" ? "Close" : "Show",
      },
    }));

    setTimeout(() => {
      setButtonStates((prevStates) => ({
        ...prevStates,
        [buttonId]: { ...prevStates[buttonId], isDisabled: false },
      }));
    }, 300);
  };
  return (
    <div>
      <ServicesPrimer />
      <div className="container-fluid p-4">
        <div className="d-flex flex-column">
          <div className="card mb-2">
            <div className="card-body bg-light">
              <h3 className="services-font">Installations</h3>
              <button
                onClick={() => handleButtonClick("btn-1")}
                className={`${isMobile ? "btn-custom-mobile" : "btn-custom"}
                  fw-mediumm m-3`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#contentId0"
                aria-expanded="false"
                aria-controls="contentId0"
                id="btn-1"
              >
                {buttonStates["btn-1"].text}
              </button>
              <div className="collapse" id="contentId0">
                <ServiceOption
                  service_primer="When upgrading your bathroom, kitchen, or laundry room, you’ll
                  need to install new plumbing and fixtures. It’s also crucial to replace older faucets,
                  showerheads, and appliance connections as soon as they corrode and start leaking to
                  prevent further damage to your property. This is where AttaPlumbing can help.
                  We offer comprehensive plumbing repair and installation services to keep your property
                  in working order. By proactively replacing or installing plumbing components, you can
                  prevent severe problems before they escalate into costly emergencies. Routine maintenance
                  is much simpler than dealing with an unexpected plumbing crisis."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light">
              <h3 className="services-font">Repairs</h3>
              <button
                onClick={() => handleButtonClick("btn-2")}
                className={`${isMobile ? "btn-custom-mobile" : "btn-custom"}
                  fw-mediumm m-3`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#contentId1"
                aria-expanded="false"
                aria-controls="contentId1"
                id="btn-2"
              >
                {buttonStates["btn-2"].text}
              </button>
              <div className="collapse" id="contentId1">
                <ServiceOption
                  service_primer="Plumbing pipe repairs of any kind can be handled by the knowledgeable
                 and experienced professionals at AttaPlumbing. Our team is committed to providing high-quality services
                 that restore your plumbing system's functionality while minimizing inconvenience to your home.
                 Count on our staff to deliver a solution that meets your needs, whether you require a complete re-piping or an urgent
                 leak repair. Contact us today for a consultation and find out why we’re the top pipe repair company in San Diego, CA."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light">
              <h3 className="services-font">Home Remodeling & Additions</h3>
              <button
                onClick={() => handleButtonClick("btn-3")}
                className={`${isMobile ? "btn-custom-mobile" : "btn-custom"}
                  fw-mediumm m-3`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#contentId2"
                aria-expanded="false"
                aria-controls="contentId2"
                id="btn-3"
              >
                {buttonStates["btn-3"].text}
              </button>
              <div className="collapse" id="contentId2">
                <ServiceOptionRemodel
                  title_0="Bathroom Remodeling"
                  service_primer_0="Redesign your bathroom with AttaPlumbing's San Diego renovation services. 
                  Discover how we can transform your bathroom with a contemporary and efficient design that fits your preferences."
                  title_1="Kitchen Remodeling"
                  service_primer_1="AttaPlumbing's remodeling services in San Diego will help you realize your kitchen vision. 
                  Whether you choose modern or classic styles, our professionals will design a kitchen that meets your specifications."
                  title_2="Home Renovation"
                  service_primer_2="AttaPlumbing offers comprehensive home renovation services in San Diego that can significantly transform your living space.
                   Our precision and attention to detail ensure a smooth process for both single-room upgrades and full-house remodels."
                  title_3="Home Additions"
                  service_primer_3="AttaPlumbing's experienced addition services in San Diego will help you expand the possibilities for your
                   property. Whether you’re looking to extend your living space or increase the value of your home, our team delivers exceptional results with professionalism and expertise."
                  title_4="ADU Services"
                  service_primer_4="AttaPlumbing’s ADU services in San Diego help you maximize the potential of additional living space.
                   Whether you want to generate rental income, accommodate multigenerational living, or expand your property, our team 
                   provides expertly designed and functional solutions to meet your needs."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light">
              <h3 className="services-font">Conventional Water Heaters</h3>
              <button
                onClick={() => handleButtonClick("btn-4")}
                className={`${isMobile ? "btn-custom-mobile" : "btn-custom"}
                  fw-mediumm m-3`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#contentId3"
                aria-expanded="false"
                aria-controls="contentId3"
                id="btn-4"
              >
                {buttonStates["btn-4"].text}
              </button>
              <div className="collapse" id="contentId3">
                <ServiceOption service_primer="A conventional water heater (tank) is a popular choice due to its cost-effectiveness
                 and ease of installation. It can easily be integrated into any property and is generally less expensive to install
                  compared to other water heating systems." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light">
              <h3 className="services-font">Tankless Water Heaters</h3>
              <button
                onClick={() => handleButtonClick("btn-5")}
                className={`${isMobile ? "btn-custom-mobile" : "btn-custom"}
                  fw-mediumm m-3`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#contentId4"
                aria-expanded="false"
                aria-controls="contentId4"
                id="btn-5"
              >
                {buttonStates["btn-5"].text}
              </button>
              <div className="collapse" id="contentId4">
                <ServiceOption service_primer="The tankless water heater, one of the most innovative and popular options available,
                 was first introduced in 1929 by Stiebel-Elton, who invented the first electric tankless model, making the system
                 more readily available. Designed to provide hot water on demand, it offers a more efficient alternative to traditional
                 storage systems, where hot water can be depleted before meeting your family's needs." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light">
              <h3 className="services-font">Fire Place Retrofits</h3>
              <button
                onClick={() => handleButtonClick("btn-6")}
                className={`${isMobile ? "btn-custom-mobile" : "btn-custom"}
                  fw-mediumm m-3`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#contentId5"
                aria-expanded="false"
                aria-controls="contentId5"
                id="btn-6"
              >
                {buttonStates["btn-6"].text}
              </button>
              <div className="collapse" id="contentId5">
                <ServiceOption service_primer="Attaplumbing's skilled gas experts ensure that every installation is completed correctly
                and in full compliance with all state and municipal codes. A fireplace insert is a prefabricated unit designed to fit into
                the firebox of an existing open brick fireplace. No additional construction, demolition, or modifications are needed. Gas
                inserts vent through their own pipe, extending up the chimney, and can operate on either natural gas or propane." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light">
              <h3 className="services-font">Gas line Installations and Retrofits</h3>
              <button
                onClick={() => handleButtonClick("btn-7")}
                className={`${isMobile ? "btn-custom-mobile" : "btn-custom"}
                  fw-mediumm m-3`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#contentId6"
                aria-expanded="false"
                aria-controls="contentId6"
                id="btn-7"
              >
                {buttonStates["btn-7"].text}
              </button>
              <div className="collapse" id="contentId6">
                <ServiceOption service_primer="A new natural gas installation for a property typically involves routing the gas line underground
                using the proper plumbing materials. AttaPlumbing’s professionals handle the installation and pressure testing of the pipes,
                ensuring the system is safe and compliant with all San Diego building codes.
                The underground installation terminates at the foundation of the building, where the natural gas provider installs a gas meter.
                From this meter, gas piping can be routed underground to various access points throughout the building. However, it is most commonly routed through walls or the attic to facilitate easier access and future modifications."/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
