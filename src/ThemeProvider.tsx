import React from 'react';
import { ThemeProvider as TP } from 'styled-components';
import theme from './theme';

export default function ThemeProvider(props: any) {
  return <TP theme={theme} {...props} />;
}
