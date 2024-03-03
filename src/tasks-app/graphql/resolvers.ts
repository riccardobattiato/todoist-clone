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
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value as string); // value from the client
    },
    serialize(value) {
      return (value as Date).toISOString(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
};
