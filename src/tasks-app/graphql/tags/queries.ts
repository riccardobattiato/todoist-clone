import { findTags } from "@/mongoose/tags/services";

export const tagsQueries = {
  allTags: async (_: any) => {
    return await findTags();
  },
};
