Bookmarker UI is a React component library that implements Neumorphic Design, which includes a collection of components ready for production.

# Contents

- [Contents](#contents)
- [Introduction](#introduction)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Provider](#provider)
  - [Theme](#theme)
- [Components](#components)
  - [Avatar](#avatar)
  - [Board](#board)
  - [Button](#button)
  - [Checkbox](#checkbox)
  - [Chip](#chip)
  - [Container](#container)
  - [Figure](#figure)
  - [Header](#header)
  - [Hide](#hide)
  - [Input](#input)
  - [Link](#link)
  - [Loader](#loader)
  - [Radio](#radio)
  - [Select](#select)
  - [Textarea](#textarea)
- [Props](#props)
- [Hooks](#hooks)
  - [useWindowSize](#usewindowsize)
  - [useClickAway](#useclickaway)
- [Scripts](#scripts)
  - [darken](#darken)
  - [contrastColor](#contrastcolor)

# Introduction

This is a basic react components using neumorphic styles. For visualisation, please check out storybook [here](https://bookmarker-ui.vercel.app)

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

## Avatar

```tsx
import { Avatar } from 'bookmarker-ui';

export default function Demo() {
  return (
    <div>
      <Avatar src="https://picsum.photos/200/300" />
      <Avatar
        shape="rounded"
        src="https://picsum.photos/200/300"
        style={{
          height: 200,
        }}
      />
      <Avatar
        shape="circle"
        src="https://picsum.photos/200/300"
        style={{
          height: 200,
        }}
      />
    </div>
  );
}
```

## Board

```tsx
import { Board } from 'bookmarker-ui';

export default function Demo() {
  return (
    <div>
      <Board depth={1}>
        <div style={{ padding: 8 }}>Low</div>
      </Board>
      <Board depth={2}>
        <div style={{ padding: 8 }}>Medium</div>
      </Board>
      <Board depth={3}>
        <div style={{ padding: 8 }}>Deep</div>
      </Board>
    </div>
  );
}
```

## Button

This is a basic button, for interaction or clicking

```tsx
import { Button } from 'bookmarker-ui';

export default function Demo() {
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

## Checkbox

This is a basic button, for interaction or clicking

```tsx
export default function Demo() {
  return (
    <div>
      <Checkbox label="Default" />
      <Checkbox checked label="Primary" variant="primary" />
      <Checkbox checked label="Secondary" variant="secondary" />
      <Checkbox disabled label="Disabled" />
    </div>
  );
}
```

## Chip

Used to indicate labels or tags

```tsx
import { Chip } from 'bookmarker-ui';

export default function Demo() {
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

## Container

```tsx
import { Container } from 'bookmarker-ui';

export default function Demo() {
  return <Container>This is the body</Container>;
}
```

## Figure

```tsx
import { Avatar, Figure, FigCaption } from 'bookmarker-ui';

export default function Demo() {
  return (
    <div>
      <Figure caption="Hello Image" src="https://picsum.photos/200/300" />
      <Figure
        caption="Hello Image"
        src="https://picsum.photos/200/300"
        shape="rounded"
      />
      <Figure
        caption="Hello Image"
        src="https://picsum.photos/200/300"
        shape="circle"
      />
    </div>
  );
}
```

## Header

```tsx
import { MenuItem, Hide, Input, Header } from 'bookmarker-ui';

export default function Demo() {
  return (
    <Header style={{ justifyContent: 'space-between' }}>
      <MenuItem active>
        <img
          src="https://bookmarker-one.vercel.app/favicon.ico"
          style={{ height: 24, width: 24 }}
        />
      </MenuItem>
      <Hide smDown>
        <Input
          onChange={() => {}}
          placeholder="filter"
          type="search"
          value=""
        />
      </Hide>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MenuItem active>Profile</MenuItem>
        <MenuItem>Sign out</MenuItem>
      </div>
    </Header>
  );
}
```

## Hide

```tsx
import { Hide } from 'bookmarker-ui';

export default function Demo() {
  const { width } = useWindowSize();

  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>size: {width}</div>
      <Hide xsDown>xsDown: 320</Hide>
      <Hide xsUp>xsUp: 320</Hide>
      <Hide smDown>smDown: 640</Hide>
      <Hide smUp>smUp: 640</Hide>
      <Hide mdDown>mdDown: 960</Hide>
      <Hide mdUp>mdUp: 960</Hide>
      <Hide lgDown>lgDown: 1280</Hide>
      <Hide lgUp>lgUp: 1280</Hide>
      <Hide xlDown>xlDown: 1920</Hide>
      <Hide xlUp>xlUp: 1920</Hide>
    </div>
  );
}
```

## Input

```tsx
import { Input } from 'bookmarker-ui';

export default function Demo() {
  return (
    <div>
      <Input value="Default" />
      <Input disabled value="Default" />
      <Input placeholder="Write stuff here" value="" />
      <Input
        errorText="Error text here"
        placeholder="Write stuff here"
        value=""
      />
      <Input label="Email" placeholder="example@email.com" value="" />
    </div>
  );
}
```

## Link

```tsx
import { Link } from 'bookmarker-ui';

export default function Demo() {
  return (
    <div>
      <Link>Default</Link>
      <Link href="https://adeolaade.com/">Repo</Link>
    </div>
  );
}
```

## Loader

```tsx
import { Loader } from 'bookmarker-ui';

export default function Demo() {
  return <Loader />;
}
```

## Radio

This is a basic button, for interaction or clicking

```tsx
export default function Demo() {
  return (
    <div>
      <Radio
        wrapperStyle={{
          marginBottom: 8,
        }}
        label="Default"
      />
      <Radio checked label="Primary" variant="primary" />
      <Radio checked label="Secondary" variant="secondary" />
      <Radio disabled label="Disabled" />
    </div>
  );
}
```

## Select

```tsx
export default function Demo() {
  const [value, setValue] = useState('');
  const list = ['One', 'Two', 'Three', 'Four', 'Five'];

  return (
    <Select title={value || 'Select a number'}>
      {list.map(item => (
        <SelectItem
          onClick={() => setValue(item)}
          active={value === item}
          key={item}
        >
          {item}
        </SelectItem>
      ))}
    </Select>
  );
}
```

## Textarea

```tsx
import { Textarea } from 'bookmarker-ui';

export default function Demo() {
  return (
    <div>
      <Textarea rows={4} value="Default" />
      <Textarea disabled rows={4} value="Default" />
      <Textarea placeholder="Write stuff here" rows={4} value="" />
      <Textarea
        errorText="Error just occurred"
        placeholder="Write stuff here"
        rows={4}
        value=""
      />
      <Textarea
        label="Email"
        placeholder="example@email.com"
        rows={4}
        value=""
      />
    </div>
  );
}
```

# Props

- ThemeProps
- BoardProps
- ButtonProps
- ChipProps
- HeaderProps
- HideProps
- InputProps
- LinkProps
- TextareaProps

# Hooks

## useWindowSize

```ts
import { useWindowSize } from 'bookmarker-ui';

const Demo = () => {
  const { height, width } = useWindowSize();
  console.log(height, '==', width);
  // 1000 == 400

  return <div>This is it</div>;
};
```

## useClickAway

```tsx
import { useClickAway } from 'bookmarker-ui';

const Demo = () => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    console.log('Outside clicked');
  });

  return <div ref={ref}>Hello there</div>;
};
```

# Scripts

## darken

> same as lighten

```ts
// default is 0.2
darken('#ade01a'); // #8AB315
darken('#ade01a', 0.1); // #9CCA17
darken('#ade01a', 0.3); // #799D12
darken('#ade01a', 0.5); // #57700D
darken('#ade01a', 0.7); // #344308
darken('#ade01a', 0.9); // #111603
darken('#ade01a', 1); // #000000
```

## contrastColor

Returns white or black, depending on the colour provided. It will determine the best colour for contrast.

```ts
contrastColor('#fff'); //"#000000"
contrastColor('#000'); //"#ffffff"
contrastColor('#ade01a'); //"#000000"
```
