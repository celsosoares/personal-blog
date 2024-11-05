import styled from "styled-components";

export const BlogContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const PostContainer = styled.section`
  flex: 3.5;
  margin-right: 20px;
`;

export const NewsContainer = styled.section`
  flex: 1;
  background-color: #F4F4FA;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-self: flex-start;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`;

export const FilterButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #daf2ec;
  border-radius: 3px;
  background-color: #daf2ec;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  color: #07a46c;
  font-weight: bold;

  &:hover {
    background-color: #e0e0e0;
  }
`;
