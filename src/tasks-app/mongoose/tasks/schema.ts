import { Schema } from "mongoose";
import { TaskDocument } from "@/types/tasks";

export const TaskSchema = new Schema<TaskDocument>({
  name: {
    type: "String",
    required: true,
  },
  description: "String",
  priority: "Number",
  dueDate: "Date",
  completed: "Boolean",
  tags: {
    type: [Schema.Types.ObjectId],
    ref: "tags",
  },
});
