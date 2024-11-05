import React from "react";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";
import LatestNews from "../LatestNews";
import {
  BlogContainer,
  FilterButton,
  FilterContainer,
  NewsContainer,
  PostContainer,
} from "./styles";

export default function Layout() {
  return (
    <>
      <Header />
      <BlogContainer>
        <PostContainer>
          <FilterContainer>
            <FilterButton>Filtrar por Autor</FilterButton>
            <FilterButton>Ordenar por</FilterButton>
          </FilterContainer>
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
