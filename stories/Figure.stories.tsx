import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AvatarProps, Container, Figure } from '../src';

const meta: Meta = {
  title: 'Figure',
  component: Figure,
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
    <Figure
      {...args}
      caption="Hello Image"
      src="https://picsum.photos/200/300"
      style={{ height: 200 }}
    />
    {/* <Figure  shape={args.shape}>
      <Avatar   />
      <FigCaption></FigCaption>
    </Figure> */}
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
