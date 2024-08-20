const typeDefs = `
  type Review {
    id: ID!
    name: String!
    location: String!
    reviewContent: String!
    reviewRating: Int!
  }

  type Query {
    reviews: [Review]
  }

  type Mutation {
    addReview(input: ReviewInput!): Review
  }

  input ReviewInput {
    name: String!
    location: String!
    reviewContent: String!
    reviewRating: String!
  }
`;

module.exports = typeDefs;
