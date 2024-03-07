import { Schema } from "mongoose";
import type { ITag } from "@/types/tags";

export const TagSchema = new Schema<ITag>({
  name: {
    type: "String",
    required: true,
  },
  color: {
    type: "String",
    required: true,
  },
  favorite: "Boolean",
});
