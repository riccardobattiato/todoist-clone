import { createTask, updateTask, deleteTask } from "@/mongoose/tasks/services";
import { CreateTaskInterface } from "@/mongoose/tasks/custom";

export const tasksMutations = {
  createTask: async (_: any, param: CreateTaskInterface) => {
    return await createTask(param);
  },
  deleteTask: async (_: any, param: string) => {
    return await deleteTask(param);
  },
};
