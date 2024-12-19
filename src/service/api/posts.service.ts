import { api } from "../api";

export const postsService = {
  getPosts: async () => {
    return await api.get("/posts");
  },

  getPostsByAuthorId: async (authorId: number | string) => {
    return await api.get(`/posts/author/${authorId}`);
  },
};
