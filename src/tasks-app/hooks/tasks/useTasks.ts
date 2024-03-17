import { useCallback, useMemo, useState } from "react";
import { useUpdateTask } from "./useUpdateTask";
import { useGetTasks } from "./useGetTasks";
import { mapTasksToProps } from "@/components/task/map";
import { useCreateTask } from "./useCreateTask";
import { useDeleteTask } from "./useDeleteTask";

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
  const {
    submit: deleteTask,
    loading: loadingDeleteTask,
    error: errorDeleteTask,
  } = useDeleteTask();

  const [editingId, setEditingId] = useState("");

  const list = useMemo(
    () => (tasks?.allTasks ? mapTasksToProps(tasks.allTasks) : []),
    [tasks]
  );

  const toggleTaskForm = useCallback((value: string) => {
    setEditingId(value);
  }, []);

  return {
    list,
    editingId,
    toggleTaskForm,
    createTask,
    updateTask,
    deleteTask,
  };
};
