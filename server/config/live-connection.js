const mongoose = require("mongoose");

const LIVE_URI = process.env.LIVE_MONGODB_URI;

const liveDBConnection = mongoose.createConnection(LIVE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = liveDBConnection;
