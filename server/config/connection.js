require("dotenv").config(); // Load environment variables from a .env file

const mongoose = require("mongoose");

mongoose.connect(process.env.LIVE_MONGODB_URI);

module.exports = mongoose.connection;
