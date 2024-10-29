import React from 'react';

import { Container } from './styles';

interface PostProps {
  author: string;
  date: string;
  title: string;
  description: string;
}

export default function Post({ author, date, title, description }: PostProps) {
  return (
    <Container>
      <hr />
      <h4>{author}</h4>
      <span>{date}</span>
      <h2>{title}</h2>
      <small>{description}</small>
    </Container>
  );
}