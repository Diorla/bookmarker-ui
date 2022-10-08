import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, Input, InputProps } from '../src';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    value: {
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

const Template: Story<InputProps> = args => (
  <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Input {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  value: 'Default',
};

export const Disabled = Template.bind({});

Disabled.args = {
  value: 'Default',
  disabled: true,
};

export const NoValue = Template.bind({});

NoValue.args = {
  value: '',
  placeholder: 'Write stuff here',
};

export const Error = Template.bind({});

Error.args = {
  value: '',
  placeholder: 'Write stuff here',
  errorText: 'Error just occurred',
};

export const WithLabel = Template.bind({});

WithLabel.args = {
  value: '',
  placeholder: 'example@email.com',
  label: 'Email',
};
