import { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import "../styles/Contact.css";
import ContactTab from "../components/ContactTab";
import { IKImage, IKContext } from "imagekitio-react";
import { mobileCheck } from "../MobileCheck";

export default function Contact() {
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
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const isMobile = mobileCheck();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(form.email);

    setCheckEmail(!isValidEmail);
    setCheckName(!form.firstName);
    setCheckMessage(!form.message);

    if (isValidEmail && form.firstName && form.message) {
      setIsLoading(true);
      const service = import.meta.env.VITE_SERVICE;
      const template = import.meta.env.VITE_TEMPLATE;
      const public_key = import.meta.env.VITE_PUBLIC;

      const templateParams = {
        from_name: form.firstName,
        from_email: form.email,
        to_name: "Attaplumbing",
        message: form.message,
      };

      try {
        await emailjs.send(service, template, templateParams, public_key);
        setEmailSuccess(true);
        setErrorMessage("");
        setForm({
          firstName: "",
          email: "",
          message: "",
        });
        setCheckEmail(false);
        setCheckName(false);
        setCheckMessage(false);
      } catch (error) {
        console.error("FAILED...", error);
        setEmailSuccess(false);
        setErrorMessage("Failed to send your message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setEmailSuccess(false);
      setErrorMessage("Please complete all required fields.");
    }
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

          <button
            disabled={isLoading}
            className={`m-3 ${
              isMobile ? "btn-custom-contact-mobile" : "btn-custom-contact"
            }`}
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