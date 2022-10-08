import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Button,
  Chip,
  Container,
  Input,
  Link,
  Loader,
  Textarea,
  ThemeProvider,
} from '../src';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Container>
          <Button />
          <Chip title="" disabled={false} />
          <Input />
          <Link />
          <Textarea />
          <Loader />
        </Container>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
