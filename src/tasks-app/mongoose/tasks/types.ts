import type { TaskDocument, TaskPriority } from "@/types/tasks";
import type { FilterQuery, ObjectId, Types } from "mongoose";

export interface TaskDocumentFilterText extends FilterQuery<TaskDocument> {
  $or: [{ name: { $in: string } }, { description: { $in: string } }];
}

export interface TaskDocumentFilterDate extends FilterQuery<TaskDocument> {
  dueDate: {
    $eq: Date;
  };
}

export interface TaskDocumentCreate {
  name: string;
  description?: string;
  tags?: Types.Array<ObjectId>;
  priority?: TaskPriority;
  dueDate?: Date;
}

export interface TaskDocumentUpdate extends Partial<TaskDocument> {
  id: ObjectId;
}

export interface TaskDocumentDelete {
  id: ObjectId;
}
