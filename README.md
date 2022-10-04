# Contents

- [Contents](#contents)
- [Introduction](#introduction)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Provider](#provider)
  - [Theme](#theme)
- [Components](#components)
  - [Button](#button)
  - [Chip](#chip)
- [Props](#props)
  - [ThemeProps](#themeprops)
  - [ButtonProps](#buttonprops)

# Introduction

This is a basic react components using neumorphic styles. For visualisation, please check out storybook ![here](https://bookmarker-ui.vercel.app)

# Getting started

## Installation

```sh
  npm i bookmarker-ui
```

It is built using styled-components as CSS-in-JS, so it is required for it to work.

```sh
  npm i styled-components
```

## Provider

Use ThemeProvider at the root of your app, or on the ancestor of any components that you may need it.

```tsx
import { ThemeProvider } from 'bookmarker-ui';

export default function index() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

## Theme

`bookmarker-ui` comes with its own theme, but you may want to update it. This is possible inside `ThemeProvider`.

```tsx
import { ThemeProvider, theme, ThemeProps } from 'bookmarker-ui';

const myTheme: ThemeProps = {
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      main: '#ade01a',
      dark: '#8cb515',
      light: '#bff71e',
    },
  },
};
export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```

See [ThemeProps](#themeprops) for full details about the props

# Components

## Button

This is a basic button, for interaction or clicking

```tsx
import { Button } from 'bookmarker-ui';

export default function Component() {
  return (
    <div>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Default</Button>
      <Button disabled variant="primary">
        Primary
      </Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
    </div>
  );
}
```

## Chip

Used to indicate labels or tags

```tsx
import { Chip } from 'bookmarker-ui';

export default function Component() {
  return (
    <div>
      <Chip title="Default" />
      <Chip disabled title="Default disabled" />
      <Chip onClick={() => console.log('hello')} title="Clickable" />
      <Chip
        disabled
        onClick={() => console.log('hello')}
        title="Clickable and Disabled"
      />
    </div>
  );
}
```

# Props

## ThemeProps

## ButtonProps
