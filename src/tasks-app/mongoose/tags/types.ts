import type { ITag } from "@/types/tags";
import { ObjectId } from "mongoose";

export interface ITagCreate extends ITag {}
export interface ITagUpdate extends ITag {
  id: ObjectId;
}
export interface ITagDelete {
  id: ObjectId;
}
