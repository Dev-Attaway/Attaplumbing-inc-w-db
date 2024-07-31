import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addReview($name: String!) {
    addReview(name: $name) {
      _id
      name
      skills
    }
  }
`;

// export const ADD_SKILL = gql`
//   mutation addSkill($profileId: ID!, $skill: String!) {
//     addSkill(profileId: $profileId, skill: $skill) {
//       _id
//       name
//       skills
//     }
//   }
// `;
