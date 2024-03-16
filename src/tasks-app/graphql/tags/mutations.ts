import { createTag, updateTag, deleteTag } from "@/mongoose/tags/services";
import {
  TagDocumentCreate,
  TagDocumentUpdate,
  TagDocumentDelete,
} from "@/mongoose/tags/types";

export const tagsMutations = {
  createTag: async (_: any, { input }: { input: TagDocumentCreate }) => {
    return await createTag(input);
  },
  updateTag: async (_: any, { input }: { input: TagDocumentUpdate }) => {
    return await updateTag(input);
  },
  deleteTag: async (_: any, { input }: { input: TagDocumentDelete }) => {
    return await deleteTag(input);
  },
};
