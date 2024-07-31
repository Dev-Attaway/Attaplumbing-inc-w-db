import React, { createContext, useContext, useState, useEffect } from "react";

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(checkIfMobile());
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

export const mobileCheck = () => useContext(MobileContext);