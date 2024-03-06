import gql from "graphql-tag";

export default gql`
  type Task {
    name: String
    description: String
    priority: Int
    dueDate: Date
    completed: Boolean
  }

  input TaskCreate {
    name: String!
    description: String
    priority: Int
    dueDate: Date
  }

  input TaskUpdate {
    id: String!
    name: String!
    description: String
    priority: Int
    dueDate: Date
    completed: Boolean
  }

  input TaskDelete {
    id: ID!
  }
`;
