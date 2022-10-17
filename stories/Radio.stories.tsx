import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps, Container } from '../src';

const meta: Meta = {
  title: 'Radio',
  component: Radio,
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

const Template: Story<RadioProps> = ({ variant, disabled, label }) => {
  const [checked, setChecked] = useState('one');
  return (
    <Container fullHeight alignCenter justifyCenter>
      <div>{label}</div>
      <Container>
        <Radio
          wrapperStyle={{ marginBottom: 8 }}
          checked={checked === 'one'}
          onChange={() => setChecked('one')}
          variant={variant}
          disabled={disabled}
          label="One"
        />
        <Radio
          wrapperStyle={{ marginBottom: 8 }}
          checked={checked === 'two'}
          onChange={() => setChecked('two')}
          variant={variant}
          disabled={disabled}
          label="Two"
        />
        <Radio
          wrapperStyle={{ marginBottom: 8 }}
          checked={checked === 'three'}
          onChange={() => setChecked('three')}
          variant={variant}
          disabled={disabled}
          label="Three"
        />
      </Container>
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
