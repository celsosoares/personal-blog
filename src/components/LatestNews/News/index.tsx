import React from "react";

import { Container } from "./styles";

interface NewsProps {
  date: string;
  title: string;
}

export default function News({ date, title }: NewsProps) {
  return (
    <Container>
      <h4>{title}</h4>
      <span>{date}</span>
    </Container>
  );
}
