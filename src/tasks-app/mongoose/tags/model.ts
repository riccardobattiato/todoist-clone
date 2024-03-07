import mongoose, { model } from "mongoose";
import type { ITag } from "@/types/tags";
import { TagSchema } from "./schema";

export default mongoose.models.tags || model<ITag>("tags", TagSchema);
