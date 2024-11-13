import React from "react";

import { Container } from "./styles";
import Post from "./Post";
import posts from "./posts";

interface PostType {
  id: number;
  author: string;
  date: Date;
  title: string;
  description: string;
}

type PostsListProps = {
  sortCriterion: "recent" | "oldest" | "title";
  selectedAuthor: string | null;
};

export default function PostsList({
  sortCriterion,
  selectedAuthor,
}: PostsListProps) {
  const filteredPosts = posts.filter(
    (post) => !selectedAuthor || post.author === selectedAuthor
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortCriterion === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortCriterion === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <Container>
      {sortedPosts.map((post: PostType) => (
        <Post
          key={post.id}
          author={post.author}
          date={post.date}
          title={post.title}
          description={post.description}
        />
      ))}
    </Container>
  );
}
