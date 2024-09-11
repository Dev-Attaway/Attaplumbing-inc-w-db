const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI_LOCAL);

module.exports = mongoose.connection;
