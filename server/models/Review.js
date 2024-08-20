const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  reviewContent: {
    type: String,
    required: true,
  },
  reviewRating: {
    type: Number,
    required: true,
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
