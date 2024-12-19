import React from "react";

import { Container } from "./styles";
import Post from "./Post";
import { IPosts } from "../../interfaces/posts.interface";
import { IAuthors } from "../../interfaces/authors.interface";

type PostsListProps = {
  sortCriterion: "recent" | "oldest" | "title";
  selectedAuthor: IAuthors | null;
  posts: IPosts[];
};

export default function PostsList({
  sortCriterion,
  selectedAuthor,
  posts,
}: PostsListProps) {
  const filteredPosts = posts.filter(
    (post) => !selectedAuthor || post.author.id === selectedAuthor.id
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortCriterion === "recent") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortCriterion === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <Container>
      {sortedPosts.map((post: IPosts) => (
        <Post
          key={post.id}
          author={post.author.name}
          date={new Date(post.createdAt).toLocaleDateString()}
          title={post.title}
          description={post.content}
        />
      ))}
    </Container>
  );
}
