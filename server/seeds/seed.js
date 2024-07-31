const db = require("../config/connection");
const { Review } = require("../models");
const cleanDB = require("./cleanDB");

const reviewData = require("./reviewData.json");

db.once("open", async () => {
  await cleanDB("Review", "reviews");

  await Review.create(reviewData);

  console.log("all done!");
  process.exit(0);
});
