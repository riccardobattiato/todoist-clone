import type { ITagCreate, ITagUpdate, ITagDelete } from "./types";
import Tags from "./model";
import type { ITag } from "@/types/tags";

export async function createTag(data: ITagCreate): Promise<ITag | void> {
  return await Tags.create(data);
}

export async function findTags(): Promise<ITag[] | []> {
  return await Tags.find({});
}

export async function updateTag({
  id,
  ...rest
}: ITagUpdate): Promise<ITag | null | void> {
  return Tags.findByIdAndUpdate(id, rest, { new: true });
}

/**
 * @returns successful deletion
 */
export async function deleteTag({ id }: ITagDelete): Promise<boolean> {
  return !!(await Tags.findByIdAndDelete(id));
}
