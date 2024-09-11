const mongoose = require("mongoose");

const LOCAL_URI = process.env.LOCAL_MONGODB_URI;

const localDBConnection = mongoose.createConnection(LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = localDBConnection;
