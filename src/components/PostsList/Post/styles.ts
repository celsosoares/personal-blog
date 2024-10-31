import styled from 'styled-components';

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
    color: #e476c8;
  }

  span {
    margin: 0 0 20px;
    font-size: smaller;
    color: #868484
  }

  small {
    opacity: 0.7;
  }

  hr {
    border: none;
    border-top: 1px solid #868484;
    width: 100%;
    margin: 0 0 20px;  
  }
`;