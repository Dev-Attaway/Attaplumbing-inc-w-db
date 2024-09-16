require("dotenv").config(); // Load environment variables from a .env file

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

// Set up the server port and reCAPTCHA secret key from environment variables
const PORT = process.env.PORT || 3001; // Default to port 3001 if PORT is not set

// Initialize ApolloServer with type definitions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express(); // Create an Express application

// Middleware for handling CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: (origin, callback) => callback(null, true), // Allow requests from any origin
    credentials: true, // Allow cookies to be included with requests
  })
);

// Middleware to parse URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware to verify reCAPTCHA token
app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body; // Extract token from request body

  // Check if token is provided
  if (!token) {
    return res
      .status(400) // Bad request if token is missing
      .json({ success: false, message: "Token is required" });
  }

  try {
    // Verify reCAPTCHA token with Google's API
    const response = await axios.post(
      // is the endpoint provided by Google for verifying reCAPTCHA tokens.
      `https://www.google.com/recaptcha/api/siteverify`,

      //  indicates that no request body is sent. Instead, the parameters are passed as URL query parameters
      null,
      {
        params: {
          secret: process.env.VITE_RECAPTCHA_SECRET_KEY, // reCAPTCHA secret key
          response: token, // reCAPTCHA response token
        },
      }
    );
    const { success } = response.data; // Extract success status from the response
    res.json({ success }); // Send success status as JSON response
  } catch (error) {
    // Log error and respond with a failure message
    console.error("Error verifying reCAPTCHA token:", error);
    res.status(500).json({ success: false, message: "Verification failed" });
  }
});

// Function to start the server
async function startServer() {
  await server.start(); // Start the Apollo Server
  app.use("/graphql", expressMiddleware(server)); // Set up GraphQL middleware

  // Connect to the database and start the Express server
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`); // Log GraphQL endpoint
    });
  });
}

// Start the server and handle any errors
startServer().catch((error) => {
  console.error("Error starting server:", error); // Log error if server fails to start
});
