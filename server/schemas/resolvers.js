const { Review } = require("../models");

const resolvers = {
  Mutation: {
    addReview: async (parent, { input }) => {
      try {
        const newReview = new Review({
          name: input.name,
          location: input.location,
          reviewContent: input.reviewContent,
          reviewRating: input.reviewRating,
        });

        const savedReview = await newReview.save();
        return savedReview;
      } catch (err) {
        console.error(err);
        throw new Error("Failed to add review");
      }
    },
  },
  Query: {
    reviews: async () => {
      try {
        return await Review.find();
      } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch reviews");
      }
    },
  },
};

module.exports = resolvers;
