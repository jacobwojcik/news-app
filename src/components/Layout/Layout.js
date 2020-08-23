import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../../utils/theme";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Open Sans", sans-serif;
  background-color: rgb(250, 246, 246);
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.8;
  }
}
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
