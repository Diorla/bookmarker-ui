import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Board, BoardProps, Container } from '../src';

const meta: Meta = {
  title: 'Board',
  component: Board,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BoardProps> = args => (
  <Container fullHeight alignCenter justifyCenter>
    <Board {...args}>
      <div style={{ padding: 8 }}>{args.children}</div>
    </Board>
  </Container>
);

export const Low = Template.bind({});

Low.args = {
  children: 'Low',
  depth: 1,
};

export const Medium = Template.bind({});

Medium.args = {
  children: 'Medium',
  depth: 2,
};

export const Deep = Template.bind({});

Deep.args = {
  children: 'Deep',
  depth: 3,
};
