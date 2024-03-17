import { useCallback, useMemo, useState } from "react";
import { useUpdateTask } from "./useUpdateTask";
import { AddTaskFormPayload } from "@/types/tasks";
import { useGetTasks } from "./useGetTasks";
import { mapTasksToProps } from "@/components/task/map";
import { useCreateTask } from "./useCreateTask";

export const useTasks = () => {
  const {
    data: tasks,
    loading: loadingGetTasks,
    error: errorGetTasks,
  } = useGetTasks();
  const {
    submit: createTask,
    loading: loadingCreateTask,
    error: errorCreateTask,
  } = useCreateTask();
  const {
    submit: updateTask,
    loading: loadingUpdateTask,
    error: errorUpdateTask,
  } = useUpdateTask();

  const [editingId, setEditingId] = useState("");

  const list = useMemo(
    () => (tasks?.allTasks ? mapTasksToProps(tasks.allTasks) : []),
    [tasks]
  );

  const toggleTaskForm = useCallback((value: string) => {
    setEditingId(value);
  }, []);

  return { list, editingId, toggleTaskForm, createTask, updateTask };
};
