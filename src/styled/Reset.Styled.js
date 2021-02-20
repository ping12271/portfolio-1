import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
  img {
    vertical-align: top;
    max-width: 100%;
  }
  input {
    border: none;
  }
`;