import React from 'react';

import { Container } from './styles';
import Post from './Post';
import posts from './posts';

interface PostType {
  id: number;
  author: string;
  date: string;
  title: string;
  description: string;
}

export default function PostsList() {
  return (
    <Container>
      {posts.map((post: PostType) => (
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
