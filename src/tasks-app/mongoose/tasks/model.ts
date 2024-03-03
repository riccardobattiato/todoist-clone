import mongoose, { model } from "mongoose";
import { TaskSchema, TaskType } from "./schema";

export default mongoose.models.tasks || model<TaskType>("tasks", TaskSchema);
