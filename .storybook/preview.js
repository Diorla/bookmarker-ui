//@ts-check
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from '../src/theme';
import GlobalWrapper from '../src/GlobalWrapper';

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalWrapper>
        <Story {...context} />
      </GlobalWrapper>
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
