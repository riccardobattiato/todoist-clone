import { createTask, updateTask, deleteTask } from "@/mongoose/tasks/services";
import { ITaskCreate, ITaskUpdate, ITaskDelete } from "@/mongoose/tasks/types";

export const tasksMutations = {
  createTask: async (_: any, { input }: { input: ITaskCreate }) => {
    return await createTask(input);
  },
  updateTask: async (_: any, { input }: { input: ITaskUpdate }) => {
    return await updateTask(input);
  },
  deleteTask: async (_: any, { input }: { input: ITaskDelete }) => {
    return await deleteTask(input);
  },
};
