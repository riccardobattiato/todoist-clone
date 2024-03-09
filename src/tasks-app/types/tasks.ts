import { ObjectId, Types, Document } from "mongoose";
import { ITag } from "./tags";

export enum TaskPriority {
  URGENT = 1,
  HIGH,
  NORMAL,
  LOW,
}

// App version, returned by GraphQL queries
export interface ITask {
  _id: string;
  name: string;
  description?: string;
  tags?: ITag[];
  priority?: TaskPriority;
  dueDate?: Date;
  completed?: boolean;
}

// MongoDB document
export interface TaskDocument extends Document {
  name: string;
  description?: string;
  tags?: Types.Array<ObjectId>;
  priority?: number;
  dueDate?: Date;
  completed?: boolean;
}
