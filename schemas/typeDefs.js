const typeDefs = `
  type Review {
    _id: ID
    name: String
    location: String
    reviewContent: String
  }
    type Query {
    reviews: [Review]
  }
`;

module.exports = typeDefs;
