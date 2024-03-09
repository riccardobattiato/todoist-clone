import type { TagDocument } from "@/types/tags";
import { ObjectId } from "mongoose";

export interface TagDocumentCreate extends TagDocument {}
export interface TagDocumentUpdate extends TagDocument {
  id: ObjectId;
}
export interface TagDocumentDelete {
  id: ObjectId;
}
