import gql from "graphql-tag";

export default gql`
  type Task {
    _id: ID!
    name: String
    description: String
    tags: [Tag]
    priority: Int
    dueDate: Date
    completed: Boolean
  }

  input TaskCreate {
    name: String!
    description: String
    priority: Int
    dueDate: Date
    tags: [ID]
  }

  input TaskUpdate {
    id: String!
    name: String
    description: String
    priority: Int
    dueDate: Date
    completed: Boolean
    tags: [ID]
  }

  input TaskDelete {
    id: ID!
  }
`;
