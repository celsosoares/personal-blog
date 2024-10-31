import React from "react";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";
import LatestNews from "../LatestNews";
import { BlogContainer, NewsContainer, PostContainer } from "./styles";

export default function Layout() {
  return (
    <>
      <Header />
      <BlogContainer>
        <PostContainer>
          <PostsList />
        </PostContainer>

        <NewsContainer>
          <LatestNews />
        </NewsContainer>
      </BlogContainer>
      <Footer />
    </>
  );
}
