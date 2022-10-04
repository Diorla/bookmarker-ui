import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputProps from '../src/Input/InputProps';
import { Input } from '../src';
import styled from 'styled-components';

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

const Wrapper = styled.div`
  width: clamp(240px, 80%, 480px);
  margin: auto;
`;

const Template: Story<InputProps> = args => (
  <Wrapper>
    <Input {...args} />
  </Wrapper>
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
