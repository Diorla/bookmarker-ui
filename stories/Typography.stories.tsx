import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, TypographyProps, Container } from '../src';

const meta: Meta = {
  title: 'Typography',
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: 'radio',
      options: ['', 'primary', 'secondary', 'error', 'warning', 'success'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Example: Story<TypographyProps> = args => (
  <Container fullHeight style={{ padding: '0 12px' }}>
    <Typography {...args} type="h1">
      Header 1
      <Typography {...args} type="subtitle">
        Subtitle
      </Typography>
    </Typography>
    <Typography>
      Anim sunt id do nostrud sunt. Aliqua id consectetur aute dolor do culpa
      esse ullamco proident quis officia. Lorem tempor esse veniam non anim
      proident dolore excepteur est magna culpa nostrud in. Quis excepteur est
      irure veniam incididunt Lorem. Pariatur voluptate occaecat officia laboris
      eiusmod et nulla pariatur labore. Proident dolor irure commodo veniam
      ipsum aliqua anim ipsum irure do elit cupidatat incididunt aliqua.
    </Typography>
    <Typography {...args} type="h2">
      Header 2
    </Typography>
    <Typography>
      Anim sunt id do nostrud sunt. Aliqua id consectetur aute dolor do culpa
      esse ullamco proident quis officia. Lorem tempor esse veniam non anim
      proident dolore excepteur est magna culpa nostrud in. Quis excepteur est
      irure veniam incididunt Lorem. Pariatur voluptate occaecat officia laboris
      eiusmod et nulla pariatur labore. Proident dolor irure commodo veniam
      ipsum aliqua anim ipsum irure do elit cupidatat incididunt aliqua.
    </Typography>
    <Typography {...args} type="h3">
      Header 3
    </Typography>
    <Typography>
      Anim sunt id do nostrud sunt. Aliqua id consectetur aute dolor do culpa
      esse ullamco proident quis officia. Lorem tempor esse veniam non anim
      proident dolore excepteur est magna culpa nostrud in. Quis excepteur est
      irure veniam incididunt Lorem. Pariatur voluptate occaecat officia laboris
      eiusmod et nulla pariatur labore. Proident dolor irure commodo veniam
      ipsum aliqua anim ipsum irure do elit cupidatat incididunt aliqua.
    </Typography>
    <Typography {...args} type="h4">
      Header 4
    </Typography>
    <Typography>
      Anim sunt id do nostrud sunt. Aliqua id consectetur aute dolor do culpa
      esse ullamco proident quis officia. Lorem tempor esse veniam non anim
      proident dolore excepteur est magna culpa nostrud in. Quis excepteur est
      irure veniam incididunt Lorem. Pariatur voluptate occaecat officia laboris
      eiusmod et nulla pariatur labore. Proident dolor irure commodo veniam
      ipsum aliqua anim ipsum irure do elit cupidatat incididunt aliqua.
    </Typography>
    <Typography {...args} type="h5">
      Header 5
    </Typography>
    <Typography>
      Anim sunt id do nostrud sunt. Aliqua id consectetur aute dolor do culpa
      esse ullamco proident quis officia. Lorem tempor esse veniam non anim
      proident dolore excepteur est magna culpa nostrud in. Quis excepteur est
      irure veniam incididunt Lorem. Pariatur voluptate occaecat officia laboris
      eiusmod et nulla pariatur labore. Proident dolor irure commodo veniam
      ipsum aliqua anim ipsum irure do elit cupidatat incididunt aliqua.
    </Typography>
    <Typography {...args} type="h6">
      Header 6
    </Typography>
    <Typography>
      Anim sunt id do nostrud sunt. Aliqua id consectetur aute dolor do culpa
      esse ullamco proident quis officia. Lorem tempor esse veniam non anim
      proident dolore excepteur est magna culpa nostrud in. Quis excepteur est
      irure veniam incididunt Lorem. Pariatur voluptate occaecat officia laboris
      eiusmod et nulla pariatur labore. Proident dolor irure commodo veniam
      ipsum aliqua anim ipsum irure do elit cupidatat incididunt aliqua.
    </Typography>
    <Typography {...args} type="caption">
      Ade Adeola &copy; 2022
    </Typography>
  </Container>
);

export const Template: Story<TypographyProps> = args => (
  <Container fullHeight alignCenter justifyCenter>
    <Typography {...args} type="h1">
      Header 1
    </Typography>
    <Typography {...args} type="h2">
      Header 2
    </Typography>
    <Typography {...args} type="h3">
      Header 3
    </Typography>
    <Typography {...args} type="h4">
      Header 4
    </Typography>
    <Typography {...args} type="h5">
      Header 5
    </Typography>
    <Typography {...args} type="h6">
      Header 6
    </Typography>
    <Typography {...args} type="caption">
      Caption
    </Typography>
    <Typography {...args} type="subtitle">
      Subtitle
    </Typography>
    <Typography {...args}>Body</Typography>
  </Container>
);
