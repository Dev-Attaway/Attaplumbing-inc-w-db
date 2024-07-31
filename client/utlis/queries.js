import { gql } from "@apollo/client";

export const QUERY_REVIEWS = gql`
  query allReviews {
    reviews {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_REVIEWS = gql`
  query singleReview($reviewId: ID!) {
    review(reviewId: $reviewId) {
      _id
      name
    }
  }
`;
