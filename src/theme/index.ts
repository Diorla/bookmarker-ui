import ThemeProps from './ThemeProps';
import { darken, lighten } from '../scripts/color-functions';
import ThemeProvider from './ThemeProvider';

const breakpoint = {
  xs: 320,
  sm: 640,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const primary = {
  main: '#00796b',
  dark: '#004d40',
  light: '#4db6ac',
};

const secondary = {
  main: '#e91e63',
  dark: '#c2185b',
  light: '#f06292',
};

const error = {
  main: '#e83c3d',
  dark: darken('#e83c3d'),
  light: lighten('#e83c3d'),
};

const warning = {
  main: '#ffac03',
  dark: darken('#ffac03'),
  light: lighten('#ffac03'),
};

const success = {
  main: '#329b52',
  dark: darken('#329b52'),
  light: lighten('#329b52'),
};

const stack = {
  appbar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

const duration = {
  short: '0.4s ease 0s',
  medium: '0.5s ease 0s',
  long: '0.6s ease 0s',
};

const main = {
  black: '#000000',
  white: '#ffffff',
};

const shade = {
  lightest: '#e4ebf5', // greyLight1
  lighter: '#c8d0e7', // greyLight2
  light: '#bec8e4', // greyLight3
  dark: '#9baacf', // greyDark
  darker: '#94a3c7', //
  darkest: '#8694b5', //
};

const elevation = {
  low: `${shade.light} 0.15rem 0.15rem 0.3rem, ${main.white} -0.1rem -0.1rem 0.25rem;`,
  medium: `${shade.light} 0.3rem 0.3rem 0.6rem, ${main.white} -0.2rem -0.2rem 0.5rem`,
  high: `${shade.light} 0.6rem 0.6rem 1.2rem, ${main.white} -0.4rem -0.4rem 1rem`,
};

const depth = {
  shallow: `${shade.lighter} 0.1rem 0.1rem 0.125rem inset, ${main.white} -0.1rem -0.1rem 0.125rem inset`,
  medium: `${shade.lighter} 0.2rem 0.2rem 0.25rem inset, ${main.white} -0.2rem -0.2rem 0.25rem inset`,
  deep: `${shade.lighter} 0.3rem 0.3rem 0.375rem inset, ${main.white} -0.3rem -0.3rem 0.375rem inset`,
};

export const theme: ThemeProps = {
  breakpoint,
  elevation,
  depth,
  stack,
  duration,
  shade,
  palette: {
    primary,
    secondary,
    error,
    warning,
    success,
    main,
  },
};

export { ThemeProps, ThemeProvider };
export default theme;
