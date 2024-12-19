import { api } from "../api";

export const authorsService = {
  getAllAuthors: async () => {
    return await api.get("/authors");
  },
};
