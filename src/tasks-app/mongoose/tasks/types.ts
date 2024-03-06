import type { ITask } from "@/types/tasks";
import type { FilterQuery, ObjectId } from "mongoose";

export interface ITaskFilterText extends FilterQuery<ITask> {
  $or: [{ name: { $in: string } }, { description: { $in: string } }];
}

export interface ITaskFilterDate extends FilterQuery<ITask> {
  dueDate: {
    $eq: Date;
  };
}

export interface ITaskCreate
  extends Pick<ITask, "name" | "description" | "dueDate" | "priority"> {}

export interface ITaskUpdate extends Partial<ITask> {
  id: ObjectId;
}

export interface ITaskDelete {
  id: ObjectId;
}
