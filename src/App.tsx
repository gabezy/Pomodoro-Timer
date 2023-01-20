import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/Themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};
