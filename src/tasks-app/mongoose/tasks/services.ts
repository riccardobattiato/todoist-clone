import { CreateTaskInterface } from "./custom";
import Tasks from "./model";
import { TaskType } from "./schema";

export async function createTask(
  data: CreateTaskInterface
): Promise<TaskType | void> {
  return await Tasks.create(data);
}

export async function findAllTasks(): Promise<TaskType[] | []> {
  return await Tasks.find({});
}

export async function updateTask(
  data: TaskType
): Promise<TaskType | null | void> {
  return null; // TODO
}

export async function deleteTask(id: string): Promise<TaskType | null> {
  return await Tasks.findByIdAndDelete(id, { returnOriginal: true });
}
