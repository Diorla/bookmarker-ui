import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonProps from '../src/button/ButtonProps';
import { Button } from '../src';

const meta: Meta = {
  title: 'Components',
  component: Button,
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

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const DefaultDisabled = Template.bind({});

DefaultDisabled.args = {
  children: 'Default',
  disabled: true,
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
  children: 'Primary',
  variant: 'primary',
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});

SecondaryDisabled.args = {
  children: 'Secondary',
  variant: 'secondary',
  disabled: true,
};
