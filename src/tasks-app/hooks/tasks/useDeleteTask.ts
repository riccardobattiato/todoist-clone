import { EditTaskFormPayload } from "@/types/tasks";
import { gql, useMutation } from "@apollo/client";
import { useCallback } from "react";

export const useDeleteTask = () => {
  const [deleteTask, { loading, error }] = useMutation(
    gql`
      mutation DeleteTask($id: ID!) {
        deleteTask(input: { id: $id })
      }
    `,
    {
      refetchQueries: ["AllTasks"],
    }
  );

  const submit = useCallback(async (id: string) => {
    await deleteTask({
      variables: {
        id,
      },
    });
  }, []);

  return {
    submit,
    loading,
    error,
  };
};
