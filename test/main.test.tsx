import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Button,
  Board,
  Chip,
  Container,
  Header,
  Hide,
  Input,
  Link,
  Loader,
  MenuItem,
  Textarea,
  ThemeProvider,
  Typography,
} from '../src';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Container>
          <Button>Click me</Button>
          <Board>Hello world</Board>
          <Chip title="" />
          <Header>
            <MenuItem>Hello world</MenuItem>
          </Header>
          <Hide xlUp>Hide me</Hide>
          <Input />
          <Link />
          <Textarea />
          <Typography>Hello text</Typography>
          <Loader />
        </Container>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
