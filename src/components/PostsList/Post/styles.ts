import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;

  h2 {
    margin: 0 0 8px;
  }

  h4 {
    margin: 0 0 5px;
    color: #e04c85;
  }

  span {
    margin: 0 0 20px;
    font-size: smaller;
    color: #58595d;
  }

  small {
    opacity: 0.7;
  }

  hr {
    border: none;
    border-top: 1px solid #dbdbea;
    width: 100%;
    margin: 0 0 20px;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
  color: #58595d;

  svg {
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
