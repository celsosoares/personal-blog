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
  background-color: #f4f4fa;
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

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 1000;
  padding: 8px 0;
  width: 150px;

  p {
    padding: 8px 16px;
    margin: 0;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
