import Tasks from "./model";
import { TaskType } from "./schema";

export async function createTask(data: TaskType): Promise<TaskType | void> {
  return await Tasks.create(data);
}

export async function findAllTasks(): Promise<TaskType[] | []> {
  return await Tasks.find({});
}

export async function updateTask(
  data: TaskType
): Promise<TaskType | null | void> {
  return await Tasks.findByIdAndUpdate(data.task_id, data);
}

export async function deleteTask(id: string): Promise<null> {
  return await Tasks.findByIdAndDelete(id);
}
