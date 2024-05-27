import Fuse, { FuseResult } from "fuse.js";
import { Item, ItemClass } from "../components";
import { getPosts } from "./getPost";

const retrieveSearchResults = async (query: string): Promise<ItemClass[]> => {
  const posts: Item[] = await getPosts();
  const fuse = new Fuse(posts, {
    keys: ["title", "description", "tags"],
    includeScore: true,
    shouldSort: true,
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.3,
  });

  const resultsFuse: FuseResult<ItemClass>[] = fuse.search(query) ?? [];
  return resultsFuse.map((item) => item.item);
};

export { retrieveSearchResults };
