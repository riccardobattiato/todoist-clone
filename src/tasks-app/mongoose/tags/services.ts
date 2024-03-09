import type {
  TagDocumentCreate,
  TagDocumentUpdate,
  TagDocumentDelete,
} from "./types";
import Tags from "./model";
import type { TagDocument } from "@/types/tags";
import { FilterQuery } from "mongoose";

export async function createTag(
  data: TagDocumentCreate,
): Promise<TagDocument | void> {
  return await Tags.create(data);
}

export async function findTags(
  filter?: FilterQuery<TagDocument>,
): Promise<TagDocument[] | []> {
  return await Tags.find(filter || {});
}

export async function updateTag({
  id,
  ...rest
}: TagDocumentUpdate): Promise<TagDocument | null | void> {
  return Tags.findByIdAndUpdate(id, rest, { new: true });
}

/**
 * @returns successful deletion
 */
export async function deleteTag({ id }: TagDocumentDelete): Promise<boolean> {
  return !!(await Tags.findByIdAndDelete(id));
}
