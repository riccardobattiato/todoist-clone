import type {
  TaskDocumentCreate,
  TaskDocumentFilterText,
  TaskDocumentUpdate,
  TaskDocumentDelete,
} from "./types";
import Tasks from "./model";
import type { TaskDocument } from "@/types/tasks";

export async function createTask(
  data: TaskDocumentCreate,
): Promise<TaskDocument | void> {
  return await Tasks.create(data);
}

export async function findTasks(
  filter?: TaskDocumentFilterText,
): Promise<TaskDocument[] | []> {
  return await Tasks.find(filter || {});
}

export async function updateTask({
  id,
  ...rest
}: TaskDocumentUpdate): Promise<TaskDocument | null | void> {
  return Tasks.findByIdAndUpdate(id, rest, { new: true });
}

/**
 * @returns successful deletion?
 */
export async function deleteTask({ id }: TaskDocumentDelete): Promise<boolean> {
  return !!(await Tasks.findByIdAndDelete(id));
}
