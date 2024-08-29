import React, { useImperativeHandle, forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// ForwardRef to pass ref to the parent component
const ReCAPTCHAComponent = forwardRef(
  ({ sitekey, onChange, onExpired }, ref) => {
    // Create a ref for the ReCAPTCHA component
    const recaptchaRef = React.createRef();

    // Use useImperativeHandle to define methods that the parent component can call
    useImperativeHandle(ref, () => ({
      // Method to get the reCAPTCHA token value
      getValue() {
        return recaptchaRef.current?.getValue() || "";
      },
      // Method to reset the reCAPTCHA widget
      reset() {
        recaptchaRef.current?.reset();
      },
    }));

    // Render the ReCAPTCHA component with the provided sitekey and event handlers
    return (
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={sitekey}
        onChange={onChange}
        onExpired={onExpired}
      />
    );
  },
);

export default ReCAPTCHAComponent;