import type { ITask } from "@/types/tasks";
import type { TaskEntryProps } from "./entry";
import { ITag } from "@/types/tags";
import { TaskTag } from "./tags";

export const mapTagsToProps = (tags: ITag[]): TaskTag[] =>
  tags.map((tag) => {
    const { _id, ...rest } = tag;
    return {
      id: _id || "",
      ...rest,
    };
  });

export const mapTasksToProps = (tasks: ITask[]): TaskEntryProps[] =>
  tasks.map((task) => {
    const { _id, tags, ...rest } = task;
    return { id: _id || "", tags: mapTagsToProps(tags || []), ...rest };
  });
