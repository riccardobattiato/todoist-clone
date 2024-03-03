import gql from "graphql-tag";

import tasksTypeDefsCustom from "@/graphql/tasks/custom.gql";
import tasksTypeDefsQueries from "@/graphql/tasks/queries.gql";
import tasksTypeDefsMutations from "@/graphql/tasks/mutations.gql";

export const typeDefs = gql`
  scalar Date
  ${tasksTypeDefsCustom}

  type Query {
    ${tasksTypeDefsQueries}
  }

  type Mutation {
    ${tasksTypeDefsMutations}
  }
`;
