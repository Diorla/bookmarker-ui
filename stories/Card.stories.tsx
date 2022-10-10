import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps, Container } from '../src';

const meta: Meta = {
  title: 'Card',
  component: Card,
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

const Template: Story<CardProps> = args => (
  <Container fullHeight alignCenter justifyCenter>
    <Card {...args}>
      <div style={{ padding: 8 }}>{args.children}</div>
    </Card>
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
