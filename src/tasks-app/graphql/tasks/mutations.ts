import { createTask, updateTask, deleteTask } from "@/mongoose/tasks/services";
import {
  TaskDocumentCreate,
  TaskDocumentUpdate,
  TaskDocumentDelete,
} from "@/mongoose/tasks/types";

export const tasksMutations = {
  createTask: async (_: any, { input }: { input: TaskDocumentCreate }) => {
    return await createTask(input);
  },
  updateTask: async (_: any, { input }: { input: TaskDocumentUpdate }) => {
    return await updateTask(input);
  },
  deleteTask: async (_: any, { input }: { input: TaskDocumentDelete }) => {
    return await deleteTask(input);
  },
};
