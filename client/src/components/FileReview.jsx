import { useState } from "react";
import { useMutation } from "@apollo/client";
import { mobileCheck } from "../MobileCheck";
import { ADD_REVIEW } from "../utlis/mutations";

export default function FileReview() {
  // State variables to track validation errors for each form field
  const [checkInvoiceNumber, setCheckInvoiceNumber] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkLocation, setCheckLocation] = useState(false);
  const [checkReviewContent, setCheckReviewContent] = useState(false);
  const [checkReviewRating, setCheckReviewRating] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [reviewSubmitSuccess, setReviewSubmitSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  // GraphQL mutation hook to add a review
  const [addReview, { error }] = useMutation(ADD_REVIEW);

  // Determine if the device is mobile
  const isMobile = mobileCheck();

  // State variable for form inputs
  const [form, setForm] = useState({
    name: "",
    location: "",
    reviewContent: "",
    reviewRating: "",
    email: "",
    invoice: "",
  });

  // Handle changes in form input fields
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Regular expressions for validation
    const invoiceRegex = /\d{4}/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidInvoice = invoiceRegex.test(form.invoice);
    const isValidEmail = emailRegex.test(form.email);

    // Update validation error flags
    setCheckName(!form.name);
    setCheckLocation(!form.location);
    setCheckInvoiceNumber(!isValidInvoice);
    setCheckReviewContent(!form.reviewContent);
    setCheckEmail(!isValidEmail);
    setCheckReviewRating(!form.reviewRating);

    // Check if all fields are valid
    if (
      isValidInvoice &&
      isValidEmail &&
      form.location &&
      form.name &&
      form.reviewContent &&
      form.reviewRating
    ) {
      setSubmissionError("");

      // Prepare data for GraphQL mutation
      const tempDbPost = {
        location: form.location,
        name: form.name,
        reviewContent: form.reviewContent,
        reviewRating: form.reviewRating,
      };

      try {
        // Execute the GraphQL mutation
        const { data } = await addReview({
          variables: { input: tempDbPost },
        });

        setReviewSubmitSuccess(true); // Set success flag

        // Clear form and validation errors
        setForm({
          name: "",
          location: "",
          reviewContent: "",
          reviewRating: "",
          email: "",
          invoice: "",
        });
        setCheckName(false);
        setCheckLocation(false);
        setCheckInvoiceNumber(false);
        setCheckReviewContent(false);
        setCheckEmail(false);
        setCheckReviewRating(false);
      } catch (err) {
        setReviewSubmitSuccess(false); // Set failure flag

        // Set specific error messages based on error type
        if (err.networkError) {
          setSubmissionError(
            "Network error. Please check your connection and try again."
          );
        } else if (err.graphQLErrors) {
          setSubmissionError(
            "Error submitting review. Please try again later."
          );
        } else {
          setSubmissionError(
            "An unexpected error occurred. Please try again."
          );
        }

        console.error("Error:", err);
      }
    } else {
      setSubmissionError(
        "Form validation failed. Please check the input fields."
      );
    }
  };

  return (
    <div className="card p-4">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="font-monospace fs-5">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            name="name"
            className="form-control w-50"
          />
          {checkName && <p className="text-danger">Invalid name submitted!</p>}
        </div>

        <div className="form-group">
          <label htmlFor="location" className="font-monospace fs-5">
            City:
          </label>
          <input
            type="text"
            id="location"
            value={form.location}
            onChange={handleInputChange}
            name="location"
            className="form-control w-25"
          />
          {checkLocation && (
            <p className="text-danger">Invalid location submitted!</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="font-monospace fs-5">
            Email:
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
            <p className="text-danger">Invalid Email submitted!</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="invoice" className="font-monospace fs-5">
            Invoice:
          </label>
          <input
            type="text"
            id="invoice"
            value={form.invoice}
            onChange={handleInputChange}
            name="invoice"
            className="form-control"
            style={{ width: "5rem" }}
          />
          {checkInvoiceNumber && (
            <p className="text-danger">Invalid invoice number submitted!</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="reviewContent" className="font-monospace fs-5">
            Review:
          </label>
          <textarea
            id="reviewContent"
            value={form.reviewContent}
            onChange={handleInputChange}
            name="reviewContent"
            className="form-control"
            rows={7}
            cols={7}
          ></textarea>
          {checkReviewContent && (
            <p className="text-danger">Invalid review submitted!</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="reviewRating" className="font-monospace fs-5">
            Review Rating:
          </label>
          <input
            type="number"
            id="reviewRating"
            value={form.reviewRating}
            onChange={handleInputChange}
            name="reviewRating"
            className="form-control w-25"
            min="1"
            max="5"
            placeholder="Rating (1-5)"
          />
          {checkReviewRating && (
            <p className="text-danger">Invalid review rating submitted!</p>
          )}
        </div>

        <button
          className={`m-3 ${isMobile ? "btn-custom-contact-mobile" : "btn-custom-contact"}`}
          type="submit"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
          Submit
        </button>
      </form>

      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style={{ height: "35vh" }}
        data-bs-backdrop="static" // Makes the backdrop non-clickable
        data-bs-keyboard="false" // Prevents closing with the keyboard (e.g., Esc key)
      >
        {reviewSubmitSuccess ? (
          <>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasTopLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => location.reload()}
              ></button>
            </div>

            <div className="offcanvas-body">
              <div
                className="alert alert-success d-inline-flex align-items-center flex-wrap"
                role="alert"
              >
                <svg className="bi" width="32" height="32" fill="currentColor">
                  <use href="#check-circle-fill"></use>
                </svg>
                <div>Review was sent, Thank you!</div>
              </div>
            </div>
          </>
        ) : (
          <div className="offcanvas-body">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasTopLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {submissionError && (
              <div
                className="alert alert-danger d-inline-flex align-items-center flex-wrap"
                role="alert"
              >
                <svg className="bi" width="32" height="32" fill="currentColor">
                  <use href="#exclamation-triangle-fill"></use>
                </svg>
                <div>{submissionError}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}