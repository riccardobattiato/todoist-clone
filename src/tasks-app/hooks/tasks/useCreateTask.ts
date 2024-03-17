import { AddTaskFormPayload } from "@/types/tasks";
import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";

export const useCreateTask = () => {
  const [createTask, { loading, error }] = useMutation(
    gql`
      mutation CreateTask(
        $name: String!
        $description: String
        $dueDate: Date
        $priority: Int
        $tags: [ID!]
      ) {
        createTask(
          input: {
            name: $name
            description: $description
            dueDate: $dueDate
            priority: $priority
            tags: $tags
          }
        ) {
          name
          description
          dueDate
          priority
          tags {
            _id
            name
            color
          }
        }
      }
    `,
    {
      refetchQueries: ["AllTasks"],
    }
  );

  const submit = useCallback(async (payload: AddTaskFormPayload) => {
    await createTask({
      variables: payload,
    });
  }, []);

  return {
    submit,
    loading,
    error,
  };
};
