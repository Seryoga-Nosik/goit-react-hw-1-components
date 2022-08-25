import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
    html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    color: #010101;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }    
    a {
  text-decoration: none;
}
    img {
    display: block;
    max-width: 100%;
  height: auto;

  }
    ul,
    ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
  }
`;
