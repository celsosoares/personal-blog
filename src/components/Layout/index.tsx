import React, { useState } from "react";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";
import LatestNews from "../LatestNews";
import {
  BlogContainer,
  DropdownMenu,
  FilterButton,
  FilterContainer,
  NewsContainer,
  PostContainer,
} from "./styles";
import { FaChevronDown } from "react-icons/fa";
import authors from "../PostsList/authors";

export default function Layout() {
  type SortCriterion = "recent" | "oldest" | "title";

  const filterOptions: { label: string; value: SortCriterion }[] = [
    { label: "Mais Recente", value: "recent" },
    { label: "Mais Antigo", value: "oldest" },
    { label: "Título", value: "title" },
  ];

  const [isAuthorDropdownOpen, setIsAuthorDropdownOpen] = useState(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const [sortCriterion, setSortCriterion] = useState<SortCriterion>("recent");
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  return (
    <>
      <Header />
      <BlogContainer>
        <PostContainer>
          <FilterContainer>
            <div style={{ position: "relative" }}>
              <FilterButton
                onClick={() => setIsAuthorDropdownOpen((prev) => !prev)}
              >
                {selectedAuthor
                  ? `Autor: ${selectedAuthor}`
                  : "Filtrar por Autor"}
                <FaChevronDown style={{ marginLeft: "8px" }} />
              </FilterButton>
              {isAuthorDropdownOpen && (
                <DropdownMenu>
                  {authors.map((author) => (
                    <p
                      key={author}
                      onClick={() => {
                        setSelectedAuthor(author);
                        setIsAuthorDropdownOpen(false);
                      }}
                      style={{
                        fontWeight:
                          selectedAuthor === author ? "bold" : "normal",
                        backgroundColor:
                          selectedAuthor === author ? "#f0f0f0" : "transparent",
                      }}
                    >
                      {author}
                    </p>
                  ))}
                  <p
                    onClick={() => {
                      setSelectedAuthor(null);
                      setIsAuthorDropdownOpen(false);
                    }}
                    style={{
                      fontWeight: selectedAuthor === null ? "bold" : "normal",
                      backgroundColor:
                        selectedAuthor === null ? "#f0f0f0" : "transparent",
                    }}
                  >
                    Todos os Autores
                  </p>
                </DropdownMenu>
              )}
            </div>

            <div style={{ position: "relative" }}>
              <FilterButton
                onClick={() => setIsOrderDropdownOpen((prev) => !prev)}
              >
                Ordenar por
                <FaChevronDown style={{ marginLeft: "8px" }} />
              </FilterButton>
              {isOrderDropdownOpen && (
                <DropdownMenu>
                  {filterOptions.map((option) => (
                    <p
                      key={option.value}
                      onClick={() => {
                        setSortCriterion(option.value);
                        setIsOrderDropdownOpen(false);
                      }}
                      style={{
                        fontWeight:
                          sortCriterion === option.value ? "bold" : "normal",
                        backgroundColor:
                          sortCriterion === option.value
                            ? "#f0f0f0"
                            : "transparent",
                      }}
                    >
                      {option.label}
                    </p>
                  ))}
                </DropdownMenu>
              )}
            </div>
          </FilterContainer>
          <PostsList
            sortCriterion={sortCriterion}
            selectedAuthor={selectedAuthor}
          />
        </PostContainer>

        <NewsContainer>
          <LatestNews />
        </NewsContainer>
      </BlogContainer>
      <Footer />
    </>
  );
}
