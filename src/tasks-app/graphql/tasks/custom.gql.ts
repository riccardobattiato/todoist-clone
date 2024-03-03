import gql from "graphql-tag";

export default gql`
  type Task {
    name: String
    description: String
    due_date: Date # custom type
    priority: Int
    done: Boolean
  }
`;
