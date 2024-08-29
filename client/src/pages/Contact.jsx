import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import "../styles/Contact.css";
import ContactTab from "../components/ContactTab";
import { IKImage, IKContext } from "imagekitio-react";
import { mobileCheck } from "../MobileCheck";
import ReCAPTCHAComponent from "../components/ReCAPTCHAComponent";

// Function to verify reCAPTCHA token by sending it to the backend for validation
const verifyRecaptchaToken = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/verify-recaptcha",
      { token }
    );
    console.log("reCAPTCHA response:", response.data); // Log the response from the backend
    return response.data.success; // Return true if validation succeeded
  } catch (error) {
    console.error("Error verifying reCAPTCHA token:", error); // Log error if verification fails
    return false; // Return false if there was an error
  }
};

export default function Contact() {
  // Define state variables to manage form input values and validation flags
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [checkEmail, setCheckEmail] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkMessage, setCheckMessage] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaSuccess, setCaptchaSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  // Create a reference for the reCAPTCHA component
  const recaptchaRef = useRef(null);

  // Function to handle changes in form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value, // Update the specific form field based on the name
    });
  };

  // Check if the user is on a mobile device
  const isMobile = mobileCheck();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if reCAPTCHA component is available
    if (!recaptchaRef.current) {
      setErrorMessage("reCAPTCHA component is not available.");
      return;
    }

    // Get reCAPTCHA token from the component
    const token = recaptchaRef.current.getValue();

    // If token is not present, show an error
    if (!token) {
      setErrorMessage("Please complete the reCAPTCHA.");
      return;
    }

    // Verify reCAPTCHA token
    const recaptchaValid = await verifyRecaptchaToken(token);

    // If reCAPTCHA validation fails, show an error
    if (!recaptchaValid) {
      setErrorMessage("reCAPTCHA validation failed. Please try again.");
      return;
    }

    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(form.email);

    // Set validation flags based on form input
    setCheckEmail(!isValidEmail);
    setCheckName(!form.firstName);
    setCheckMessage(!form.message);

    // If all validations pass, proceed with sending the email
    if (isValidEmail && form.firstName && form.message && captchaSuccess) {
      setIsLoading(true); // Show loading spinner

      // Extract environment variables for emailjs configuration
      const service = import.meta.env.VITE_SERVICE;
      const template = import.meta.env.VITE_TEMPLATE;
      const public_key = import.meta.env.VITE_PUBLIC;

      // Define the parameters for the email template
      const templateParams = {
        from_name: form.firstName,
        from_email: form.email,
        to_name: "Attaplumbing",
        message: form.message,
      };

      try {
        // Send the email using emailjs
        await emailjs.send(service, template, templateParams, public_key);
        setEmailSuccess(true); // Set success state to true
        setErrorMessage(""); // Clear any previous error messages
        setForm({
          firstName: "",
          email: "",
          message: "",
        }); // Reset form fields
        setCheckEmail(false);
        setCheckName(false);
        setCheckMessage(false);
        setCaptchaSuccess(null); // Reset CAPTCHA
      } catch (error) {
        console.error("FAILED...", error); // Log error if email sending fails
        setEmailSuccess(false); // Set success state to false
        setErrorMessage("Failed to send your message. Please try again later."); // Show specific error message
      } finally {
        setIsLoading(false); // Ensure loading state is reset
      }
    } else {
      setEmailSuccess(false); // Set success state to false
      setErrorMessage(
        "Please complete all required fields and pass CAPTCHA validation."
      ); // Show validation error message
    }
  };

  // Function to handle changes in the reCAPTCHA token
  const handleCaptchaChange = (token) => {
    setCaptchaSuccess(!!token); // Set CAPTCHA success state based on token presence
  };

  // Function to handle reCAPTCHA expiration
  const handleCaptchaExpired = () => {
    setCaptchaSuccess(null); // Reset CAPTCHA success state when it expires
  };

  return (
    <div className="container-fluid">
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
            <ReCAPTCHAComponent
              sitekey={import.meta.env.VITE_RECAPTCHA}
              onChange={handleCaptchaChange}
              onExpired={handleCaptchaExpired}
              ref={recaptchaRef}
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
                  <div>
                    <p className="font-monospace p-2 m-2">
                      Your message was sent, Thank you!
                    </p>
                  </div>
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
                    <p className="font-monospace p-2 m-2">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="offcanvas-body">
                <div
                  className="alert alert-info d-inline-flex align-items-center flex-wrap"
                  role="alert"
                >
                  <svg
                    className="bi"
                    width="32"
                    height="32"
                    fill="currentColor"
                  >
                    <use href="#hourglass-split"></use>
                  </svg>
                  <div>
                    <p className="font-monospace p-2 m-2">
                      Sending your message, please wait...
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <ContactTab />
    </div>
  );
}