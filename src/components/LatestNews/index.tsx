import React from 'react';

import { Container } from './styles';
import News from './News';
import posts from '../PostsList/posts';

interface NewsType {
  id: number;
  date: string;
  title: string;
}

export default function LatestNews() {
  return (
    <Container>
        <h2>Últimas notícias</h2>
      {posts.map((post: NewsType) => (    
        <News
          key={post.id}
          date={post.date}
          title={post.title}
        />
      ))}
    </Container>
  );
}
