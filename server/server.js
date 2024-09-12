require("dotenv").config(); // Load environment variables from a .env file

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection"); // Development DB connection
const { clientPromise } = require("./config/live-connection"); // Production DB connection

// Environment setup
const ENVIRONMENT = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3001;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

// Apollo server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

// CORS middleware
app.use(
  cors({
    origin:
      ENVIRONMENT === "production" ? "https://attaplumbing.onrender.com" : "*",
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// reCAPTCHA verification endpoint
app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "Token is required" });
  }

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    // Send detailed response in development mode
    if (ENVIRONMENT === "development") {
      return res.json({
        success: response.data.success,
        details: response.data,
      });
    }

    // Send generic response in production mode
    return res.json({ success: response.data.success });
  } catch (error) {
    console.error("Error verifying reCAPTCHA token:", error);

    // Send generic error in production, detailed in development
    return res.status(500).json({
      success: false,
      message:
        ENVIRONMENT === "development" ? error.message : "Verification failed",
    });
  }
});

// Unified server start function
async function startServer() {
  try {
    await server.start();
    app.use("/graphql", expressMiddleware(server));

    // Ensure only one DB connection is made based on environment
    if (ENVIRONMENT === "production") {
      // Wait for the MongoClient connection in production
      const currentDB = await clientPromise;
      if (currentDB) {
        console.log("Connected to live MongoDB");
      }
    } else {
      // Handle Mongoose connection for development
      db.once("open", () => {
        console.log("Connected to local MongoDB");
      });
    }

    // Start the server after the database connection is established
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at ${
          ENVIRONMENT === "production"
            ? "https://attaplumbing.onrender.com/graphql"
            : `http://localhost:${PORT}/graphql`
        }`
      );
    });
  } catch (error) {
    console.error(`Error starting server in ${ENVIRONMENT} mode:`, error);
  }
}

startServer();
