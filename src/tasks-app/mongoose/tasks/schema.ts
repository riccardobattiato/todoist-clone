import { Schema, type InferSchemaType } from "mongoose";

export const TaskSchema: Schema = new Schema<TaskType>({
  name: {
    type: "String",
    required: true,
  },
  description: "String",
  due_date: "Date",
  priority: "Number",
  done: "Boolean",
});

export declare type TaskType = InferSchemaType<typeof TaskSchema>;
