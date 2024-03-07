import { createTag, updateTag, deleteTag } from "@/mongoose/tags/services";
import { ITagCreate, ITagUpdate, ITagDelete } from "@/mongoose/tags/types";

export const tagsMutations = {
  createTag: async (_: any, { input }: { input: ITagCreate }) => {
    return await createTag(input);
  },
  updateTag: async (_: any, { input }: { input: ITagUpdate }) => {
    return await updateTag(input);
  },
  deleteTag: async (_: any, { input }: { input: ITagDelete }) => {
    return await deleteTag(input);
  },
};
