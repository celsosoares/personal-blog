import { IAuthors } from "./authors.interface";

export interface IPosts {
  id: string;
  author: IAuthors;
  createdAt: Date;
  title: string;
  content: string;
}
