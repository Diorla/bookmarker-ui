import React from 'react';
import { Meta, Story } from '@storybook/react';
import ChipProps from '../src/Chip/ChipProps';
import { Chip } from '../src';

const meta: Meta = {
  title: 'Chip',
  component: Chip,
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

const Template: Story<ChipProps> = args => <Chip {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Default',
};

export const Disabled = Template.bind({});

Disabled.args = {
  title: 'Default disabled',
  disabled: true,
};

export const Clickable = Template.bind({});

Clickable.args = {
  title: 'Clickable',
  onClick: () => console.log('hello'),
};

export const ClickableDisabled = Template.bind({});

ClickableDisabled.args = {
  title: 'Clickable and Disabled',
  disabled: true,
  onClick: () => console.log('hello'),
};
