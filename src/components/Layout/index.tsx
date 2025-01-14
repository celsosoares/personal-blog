import React, { useState, useEffect } from "react";
import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";
import LatestNews from "../LatestNews";
import { FaChevronDown } from "react-icons/fa";
import { postsService } from "../../service/api/posts.service";
import { authorsService } from "../../service/api/author.service";
import { IPosts } from "../../interfaces/posts.interface";
import { IAuthors } from "../../interfaces/authors.interface";
import {
  BlogContainer,
  DropdownMenu,
  FilterButton,
  FilterContainer,
  NewsContainer,
  PostContainer,
} from "./styles";

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
  const [selectedAuthor, setSelectedAuthor] = useState<IAuthors | null>(null);

  const [posts, setPosts] = useState<IPosts[]>([]);
  const [latestPosts, setLatestPosts] = useState<IPosts[]>([]);
  const [authors, setAuthors] = useState<IAuthors[]>([]);

  const handleSelectAuthor = async (authorId: string | "all") => {
    if (authorId === "all") {
      setSelectedAuthor(null);
      return getPosts();
    }

    const selectedAuthor = authors.find((author) => author.id === authorId);
    if (selectedAuthor) {
      setSelectedAuthor(selectedAuthor);
      const { data } = await postsService.getPostsByAuthorId(authorId);
      setPosts(data);
    }
  };

  const getPosts = async () => {
    const { data } = await postsService.getPosts();
    setPosts(data);
    setLatestPosts(data);
  };

  const getAuthors = async () => {
    const { data } = await authorsService.getAllAuthors();
    setAuthors(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getPosts();
      await getAuthors();
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <BlogContainer>
        <PostContainer>
          <FilterContainer>
            <div style={{ position: "relative" }}>
              <FilterButton
                style={{ cursor: "pointer" }}
                onClick={() => setIsAuthorDropdownOpen((prev) => !prev)}
              >
                {selectedAuthor
                  ? `Autor: ${selectedAuthor.name}`
                  : "Filtrar por Autor"}
                <FaChevronDown style={{ marginLeft: "8px" }} />
              </FilterButton>
              {isAuthorDropdownOpen && authors && (
                <DropdownMenu>
                  {authors?.map((author) => (
                    <p
                      key={author.id}
                      onClick={() => {
                        setSelectedAuthor(author);
                        handleSelectAuthor(author.id);
                        setIsAuthorDropdownOpen(false);
                      }}
                      style={{
                        cursor: "pointer",
                        fontWeight:
                          selectedAuthor?.id === author.id ? "bold" : "normal",
                        backgroundColor:
                          selectedAuthor?.id === author.id
                            ? "#f0f0f0"
                            : "transparent",
                      }}
                    >
                      {author.name}
                    </p>
                  ))}
                  <p
                    onClick={() => {
                      setSelectedAuthor(null);
                      handleSelectAuthor("all");
                      setIsAuthorDropdownOpen(false);
                    }}
                    style={{
                      cursor: "pointer",
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
                style={{ cursor: "pointer" }}
                onClick={() => setIsOrderDropdownOpen((prev) => !prev)}
              >
                {sortCriterion
                  ? `Ordenar por: ${
                      filterOptions.find(
                        (option) => option.value === sortCriterion
                      )?.label
                    }`
                  : "Ordenar por"}
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
                        cursor: "pointer",
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
            posts={posts || []}
          />
        </PostContainer>

        <NewsContainer>
          <LatestNews 
            posts={latestPosts || []}
          />
        </NewsContainer>
      </BlogContainer>
      <Footer />
    </>
  );
}
