import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps, Container } from '../src';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
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

const Template: Story<CheckboxProps> = args => {
  const [checked, setChecked] = useState(!Math.round(Math.random()));
  return (
    <Container fullHeight alignCenter justifyCenter>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        {...args}
      />
    </Container>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Default',
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Secondary',
  variant: 'secondary',
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Disabled',
  disabled: true,
};
