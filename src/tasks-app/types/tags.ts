import { Color } from "./colors";
import type { Document } from "mongoose";

// App version, returned by GraphQL
export interface ITag {
  _id: string;
  name: string;
  color: Color;
  favorite?: boolean;
}

// MongoDB document
export interface TagDocument extends Document {
  name: string;
  color: string;
  favorite?: boolean;
}
