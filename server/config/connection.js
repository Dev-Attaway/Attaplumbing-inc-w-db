// config/connection.js (local database)
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.LOCAL_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to local MongoDB");
});

module.exports = db;
