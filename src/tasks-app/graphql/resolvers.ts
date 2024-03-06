import { tasksQueries } from "./tasks/queries";
import { tasksMutations } from "./tasks/mutations";
import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

export const resolvers = {
  Query: {
    ...tasksQueries,
  },
  Mutation: {
    ...tasksMutations,
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "A ISO 8601 compliant datetime value",
    parseValue(value) {
      return new Date(value as string); // value from the client
    },
    parseLiteral(ast) {
      if (ast.kind !== Kind.STRING) {
        return null;
      }
      const { value } = ast;
      return new Date(value);
    },
    serialize(value) {
      return (value as Date).toISOString(); // value sent to the client
    },
  }),
};
