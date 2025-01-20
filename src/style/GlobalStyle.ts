// src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;

   font-size: 14px; // 기본 폰트 사이즈

   @media (min-height: 1920px) {
    font-size: 28px;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }
  }
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  input {
    border: 1px solid #ddd;
    outline: none;
  }
`;

export default GlobalStyle;
