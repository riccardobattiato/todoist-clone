import gql from "graphql-tag";

import tasksTypeDefsCustom from "@/graphql/tasks/custom.gql";
import tasksTypeDefsQueries from "@/graphql/tasks/queries.gql";
import tasksTypeDefsMutations from "@/graphql/tasks/mutations.gql";
import tagsTypeDefsCustom from "@/graphql/tags/custom.gql";
import tagsTypeDefsQueries from "@/graphql/tags/queries.gql";
import tagsTypeDefsMutations from "@/graphql/tags/mutations.gql";

export const typeDefs = gql`
  scalar Date
  ${tasksTypeDefsCustom}
  ${tagsTypeDefsCustom}

  type Query {
    ${tasksTypeDefsQueries}
    ${tagsTypeDefsQueries}
  }

  type Mutation {
    ${tasksTypeDefsMutations}
    ${tagsTypeDefsMutations}
  }
`;
