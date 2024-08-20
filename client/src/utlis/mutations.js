import { gql } from "@apollo/client";

export const ADD_REVIEW = gql`
  mutation addReview($input: ReviewInput!) {
    addReview(input: $input) {
      name
      location
      reviewContent
      reviewRating
    }
  }
`;
