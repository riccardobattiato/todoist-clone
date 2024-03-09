import mongoose, { model } from "mongoose";
import type { TaskDocument } from "@/types/tasks";
import { TaskSchema } from "./schema";

export default mongoose.models.tasks ||
  model<TaskDocument>("tasks", TaskSchema);
