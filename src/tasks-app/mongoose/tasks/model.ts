import mongoose, { model } from "mongoose";
import type { ITask } from "@/types/tasks";
import { TaskSchema } from "./schema";

export default mongoose.models.tasks || model<ITask>("tasks", TaskSchema);
