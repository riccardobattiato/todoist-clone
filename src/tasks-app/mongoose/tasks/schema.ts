import { Schema, type InferSchemaType } from "mongoose";

export const TaskSchema: Schema = new Schema<TaskType>({
  task_id: {
    type: "String",
    required: true,
  },
  name: {
    type: "String",
    required: true,
  },
  description: "String",
  due_date: "Date",
  priority: "Number"
});

export declare type TaskType = InferSchemaType<typeof TaskSchema>;
