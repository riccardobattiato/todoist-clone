import { AddTaskFormPayload } from "@/types/tasks";
import { gql, useMutation } from "@apollo/client";
import { useCallback, useState } from "react";

export const CREATE_TASK_MUTATION = gql`
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
`;

const initialState: AddTaskFormPayload = {
  name: "",
  description: "",
};

export const useAddTask = () => {
  const [createTask, { loading, error }] = useMutation(CREATE_TASK_MUTATION, {
    refetchQueries: ["AllTasks"],
  });
  const [payload, setPayload] = useState<AddTaskFormPayload>(initialState);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameInput = useCallback(
    (value: string) => {
      setPayload({ ...payload, name: value });
    },
    [payload]
  );

  const handleDescriptionInput = useCallback(
    (value: string) => {
      setPayload({ ...payload, description: value });
    },
    [payload]
  );

  const clearPayload = useCallback(() => {
    setPayload(initialState);
  }, []);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    clearPayload();
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!payload) throw new Error("Invalid payload");
    await createTask({
      variables: { name: payload.name, description: payload.description },
    });
    clearPayload();
  }, [payload]);

  return {
    payload,
    handleInput: {
      name: handleNameInput,
      description: handleDescriptionInput,
    },
    isEditing,
    setIsEditing,
    handleSubmit,
    handleCancel,
    loading,
    error,
  };
};
