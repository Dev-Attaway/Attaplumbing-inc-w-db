const { Review } = require("../models");

const resolvers = {
  Query: {
    reviews: async () => {
      return await Review.find({});
    },
  },
};

module.exports = resolvers;
