// Import the necessary hooks and modules
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import ContactTab from "../components/ContactTab";
import ReCAPTCHA from "react-google-recaptcha";
import { IKImage, IKContext } from "imagekitio-react";
import { mobileCheck } from "../MobileCheck";

// Define the Contact component
export default function Contact() {
  // Define state variables for form inputs and validation flags
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  // Define state variables for validation and loading states
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkMessage, setCheckMessage] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(null);
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const isMobile = mobileCheck();

  // Handle form submission
  const handleSubmit = () => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(form.email);

    // Validate form inputs and set validation flags accordingly
    setCheckEmail(!isValidEmail);
    setCheckName(!form.firstName);
    setCheckMessage(!form.message);

    if (isValidEmail && form.firstName && form.message && captchaSuccess) {
      setIsLoading(true); // Set loading state

      const service = import.meta.env.VITE_SERVICE;
      const template = import.meta.env.VITE_TEMPLATE;
      const public_key = import.meta.env.VITE_PUBLIC;

      const templateParams = {
        from_name: form.firstName,
        from_email: form.email,
        to_name: "Attaplumbing",
        message: form.message,
      };

      emailjs
        .send(service, template, templateParams, public_key)
        .then(() => {
          setEmailSuccess(true);
          setIsLoading(false);
          // Reset form and validation flags after successful submission
          setForm({
            firstName: "",
            email: "",
            message: "",
          });
          setCheckEmail(false);
          setCheckName(false);
          setCheckMessage(false);
          setCaptchaSuccess(false); // Reset CAPTCHA
        })
        .catch((error) => {
          console.log("FAILED...", error);
          setEmailSuccess(false);
          setIsLoading(false);
        });
    } else {
      setEmailSuccess(false);
    }
  };

  return (
    <div className="container-fuild">
      <div className="p-2 m-2">
        <form>
          <div className="form-group">
            <label htmlFor="firstName" className="font-monospace fs-5">
              First name:
            </label>
            <input
              type="text"
              id="firstName"
              value={form.firstName}
              onChange={handleInputChange}
              name="firstName"
              className="form-control w-50"
            />
            {checkName && (
              <p className="text-danger">Invalid name submitted!</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="font-monospace fs-5">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              name="email"
              className="form-control w-75"
            />
            {checkEmail && (
              <p className="text-danger">Invalid email submitted!</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="font-monospace fs-5">
              Message:
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={handleInputChange}
              name="message"
              className="form-control"
              rows={7}
            ></textarea>
            {checkMessage && (
              <p className="text-danger">Invalid message submitted!</p>
            )}
          </div>

          <div className="d-flex justify-content-center p-2 m-2">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA}
              onChange={(token) => setCaptchaSuccess(token)}
            />
          </div>

          <button
            disabled={!captchaSuccess || isLoading}
            className={`m-3 ${isMobile ? "btn-custom-contact-mobile" : "btn-custom-contact"}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <div
            className="offcanvas offcanvas-top"
            tabIndex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
            style={{ height: "35vh" }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasTopLabel"></h5>
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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            {emailSuccess && (
              <div className="offcanvas-body">
                <div
                  className="alert alert-success d-inline-flex align-items-center flex-wrap"
                  role="alert"
                >
                  <svg
                    className="bi"
                    width="32"
                    height="32"
                    fill="currentColor"
                  >
                    <use href="#check-circle-fill"></use>
                  </svg>
                  <div>Your message was sent, Thank you!</div>
                </div>
              </div>
            )}

            {emailSuccess === false && !isLoading && (
              <div className="offcanvas-body">
                <div
                  className="alert alert-danger d-inline-flex align-items-center flex-wrap"
                  role="alert"
                >
                  <svg
                    className="bi"
                    width="32"
                    height="32"
                    fill="currentColor"
                  >
                    <use href="#exclamation-triangle-fill"></use>
                  </svg>
                  <div>
                    Failed to send your message. Please check the details and
                    try again!
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
        <div className="d-flex justify-content-center">
          <ContactTab />
        </div>
      </div>
    </div>
  );
}
