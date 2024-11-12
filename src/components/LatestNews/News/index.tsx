import React from "react";

import { Container } from "./styles";

interface NewsProps {
  date: Date;
  title: string;
}

export default function News({ date, title }: NewsProps) {
  return (
    <Container>
      <h4>{title}</h4>
      <span>{date.toLocaleDateString()}</span>
    </Container>
  );
}
