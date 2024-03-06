import { Schema } from "mongoose";
import { ITask } from "@/types/tasks";

export const TaskSchema = new Schema<ITask>({
  name: {
    type: "String",
    required: true,
  },
  description: "String",
  priority: "Number",
  dueDate: "Date",
  completed: "Boolean",
});
