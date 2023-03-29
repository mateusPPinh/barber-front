import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input, textarea, button {
    font: 16px Roboto;
  }

  ul, li {
    list-style: none;
  }
`;
