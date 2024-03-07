import gql from "graphql-tag";

export default gql`
  type Tag {
    _id: ID!
    name: String!
    color: String!
    favorite: Boolean
  }

  input TagCreate {
    name: String!
    color: String!
    favorite: Boolean
  }

  input TagUpdate {
    id: String!
    name: String
    color: String
    favorite: Boolean
  }

  input TagDelete {
    id: ID!
  }
`;
