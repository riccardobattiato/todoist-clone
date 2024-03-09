import { TaskDocument } from "@/types/tasks";
import { findTags } from "@/mongoose/tags/services";
import { FilterQuery } from "mongoose";
import { ITag } from "@/types/tags";

export const tasksFields = {
  tags: async (task: TaskDocument) => {
    const filter: FilterQuery<ITag> = task.tags
      ? { _id: { $in: task.tags } }
      : {};
    return await findTags(filter);
  },
};
