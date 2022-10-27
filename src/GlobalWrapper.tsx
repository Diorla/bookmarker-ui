import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Container from './components/container';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }
  .sb-show-main.sb-main-padded {
    margin: 0;
    padding: 0;
  }
`;

export default ({ children }: { children: any }) => (
  <Container fullHeight>
    <GlobalStyle />
    {children}
  </Container>
);
