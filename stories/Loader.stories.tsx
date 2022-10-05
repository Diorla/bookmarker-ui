import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loader } from '../src';

const meta: Meta = {
  title: 'Loader',
  component: Loader,
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

const Template: Story = args => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
};
