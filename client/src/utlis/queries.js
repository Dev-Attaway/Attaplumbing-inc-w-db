import { gql } from "@apollo/client";

export const QUERY_REVIEWS = gql`
  query allReviews {
    reviews {
      id
      name
      reviewContent
      reviewRating
    }
  }
`;

export const QUERY_SINGLE_REVIEWS = gql`
  query singleReview($reviewId: ID!) {
    review(reviewId: $reviewId) {
      id
      name
      reviewContent
      reviewRating
    }
  }
`;
