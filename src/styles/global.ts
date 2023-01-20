import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    background: ${({ theme }) => theme.gray700};
    color: ${({ theme }) => theme.white}
  }
`;
