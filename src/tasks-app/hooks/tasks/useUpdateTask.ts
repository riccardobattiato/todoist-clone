import { EditTaskFormPayload } from "@/types/tasks";
import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";

export const useUpdateTask = () => {
  const [updateTask, { loading, error }] = useMutation(
    gql`
      mutation UpdateTask(
        $id: String!
        $name: String
        $description: String
        $dueDate: Date
        $priority: Int
        $completed: Boolean
      ) {
        updateTask(
          input: {
            id: $id
            name: $name
            description: $description
            dueDate: $dueDate
            priority: $priority
            completed: $completed
          }
        ) {
          _id
          name
          description
          dueDate
          priority
          completed
          tags {
            _id
            name
            color
            favorite
          }
        }
      }
    `,
    {
      refetchQueries: ["AllTasks"],
    }
  );

  const submit = useCallback(async (payload: EditTaskFormPayload) => {
    await updateTask({
      variables: payload,
    });
  }, []);

  return {
    submit,
    loading,
    error,
  };
};
