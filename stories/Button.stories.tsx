import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, Container } from '../src';

const meta: Meta = {
  title: 'Button',
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

const Template: Story<ButtonProps> = args => (
  <Container fullHeight alignCenter justifyCenter>
    <Button {...args} />
  </Container>
);

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
