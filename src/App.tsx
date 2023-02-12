import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CyclesContentProvider } from "./contexts/CycleContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/Themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContentProvider>
          <Router />
        </CyclesContentProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
