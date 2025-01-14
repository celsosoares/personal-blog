import React from "react";

import { Container } from "./styles";
import News from "./News";
import { IPosts } from "../../interfaces/posts.interface";

type LatestNewsProps = {
  posts: IPosts[];
};

export default function LatestNews({ posts }: LatestNewsProps) {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <Container>
      <h2>Últimas notícias</h2>
      {sortedPosts.map((post: IPosts) => (
        <News 
          key={post.id} 
          date={new Date(post.createdAt).toLocaleDateString()} 
          title={post.title} />
      ))}
    </Container>
  );
}
