import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loader } from '../src';

const meta: Meta = {
  title: 'Loader',
  component: Loader,
  argTypes: {
    title: {
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

export const LoaderExample: Story = _args => <Loader fullHeight />;
