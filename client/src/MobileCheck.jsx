import { createContext, useContext, useState, useEffect } from "react";

// Create a context object for mobile device check
const MobileContext = createContext();

// Define a provider component for the MobileContext
export const MobileProvider = ({ children }) => {
  // State to store whether the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the user agent indicates a mobile device
    const checkIfMobile = () => /Mobi|Android/i.test(navigator.userAgent);
    // Update the state with the result of the mobile check
    setIsMobile(checkIfMobile());
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    // Provide the mobile device status to the component tree
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

// Custom hook to access the mobile status from MobileContext
export const mobileCheck = () => useContext(MobileContext);
