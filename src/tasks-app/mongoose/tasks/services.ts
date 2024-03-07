import type {
  ITaskCreate,
  ITaskFilterText,
  ITaskUpdate,
  ITaskDelete,
} from "./types";
import Tasks from "./model";
import type { ITask } from "@/types/tasks";

export async function createTask(data: ITaskCreate): Promise<ITask | void> {
  return await Tasks.create(data);
}

export async function findTasks(
  filter?: ITaskFilterText,
): Promise<ITask[] | []> {
  return await Tasks.find(filter || {});
}

export async function updateTask({
  id,
  ...rest
}: ITaskUpdate): Promise<ITask | null | void> {
  return Tasks.findByIdAndUpdate(id, rest, { new: true });
}

/**
 * @returns successful deletion?
 */
export async function deleteTask({ id }: ITaskDelete): Promise<boolean> {
  return !!(await Tasks.findByIdAndDelete(id));
}
