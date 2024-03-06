import { findTasks } from "@/mongoose/tasks/services";

export const tasksQueries = {
  allTasks: async (_: any) => {
    return await findTasks();
  },
};
