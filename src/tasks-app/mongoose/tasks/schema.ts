import { Schema } from "mongoose";
import { TaskDocument, TaskPriority } from "@/types/tasks";

export const TaskSchema = new Schema<TaskDocument>({
  name: {
    type: "String",
    required: true,
  },
  description: "String",
  priority: {
    type: "Number",
    default: TaskPriority.LOW,
  },
  dueDate: "Date",
  completed: {
    type: "Boolean",
    default: false,
  },
  tags: {
    type: [Schema.Types.ObjectId],
    ref: "tags",
  },
});
