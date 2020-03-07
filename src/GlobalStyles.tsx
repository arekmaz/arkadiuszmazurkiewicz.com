import React from "react";
import { Global, css } from "@emotion/core";

const globalStyles = `
@import-normalize;

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Raleway', sans-serif;
}

a {
  font-family: 'Questrial', sans-serif;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
}
`;
export default function GlobalStyles() {
  return <Global styles={css(globalStyles)} />;
}
