import React from "react";
import { FaTwitter, FaLinkedin, FaPaperclip } from "react-icons/fa";
import { Container, IconsContainer, PostHeader } from "./styles";

interface PostProps {
  author: string;
  date: Date;
  title: string;
  description: string;
}

export default function Post({ author, date, title, description }: PostProps) {
  return (
    <Container>
      <hr />
      <PostHeader>
        <h4>{author}</h4>
        <IconsContainer>
          <FaTwitter />
          <FaLinkedin />
          <FaPaperclip />
        </IconsContainer>
      </PostHeader>
      <span>{date.toLocaleDateString()}</span>
      <h2>{title}</h2>
      <small>{description}</small>
    </Container>
  );
}
