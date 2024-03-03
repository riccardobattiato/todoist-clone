import { findAllTasks } from "@/mongoose/tasks/services";

export const tasksQueries = {
  allTasks: async (_: any) => {
    return await findAllTasks();
  },
};
