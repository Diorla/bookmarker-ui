import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps, Container } from '../src';

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
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

const Template: Story<AvatarProps> = args => (
  <Container fullHeight alignCenter justifyCenter>
    <Avatar
      src="https://picsum.photos/200/300"
      {...args}
      style={{ height: 200 }}
    />
  </Container>
);

export const Default = Template.bind({});

Default.args = {};

export const Rounded = Template.bind({});

Rounded.args = {
  shape: 'rounded',
};

export const Circle = Template.bind({});

Circle.args = {
  shape: 'circle',
};
