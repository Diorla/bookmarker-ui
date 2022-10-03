import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
  }
`;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.shade.lightest};
  min-height: 200px;
  color: ${({ theme }) => theme.palette.main.black};
  padding: 8px;
`;

export default ({ children }: { children: any }) => (
  <StyledWrapper>
    <GlobalStyle />
    {children}
  </StyledWrapper>
);
