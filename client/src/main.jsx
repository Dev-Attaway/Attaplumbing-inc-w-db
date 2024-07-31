import React from "react";

// Import ReactDOM from the react-dom package to interact with the DOM
import ReactDOM from "react-dom/client";
// Import utilities from react-router-dom for setting up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Import various page components
import App from "./App";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main App component
    errorElement: <Error />, // Error component to render in case of routing errors
    children: [
      {
        index: true, // Indicate that this route is the index route
        element: <About />, // Render the About component for the root path
      },
      {
        path: "/Services", // Services path
        element: <Services />, // Render the Services component for the Services path
      },
      {
        path: "/Contact", // Contact path
        element: <Contact />, // Render the Contact component for the Contact path
      },
    ],
  },
]);

// Render the application using ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // Provide the router configuration to the RouterProvider component
  <RouterProvider router={router} />,
);
