import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, Link, LinkProps } from '../src';

const meta: Meta = {
  title: 'Link',
  component: Link,
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

const Template: Story<LinkProps> = args => (
  <Container fullHeight alignCenter justifyCenter>
    <Link {...args} />{' '}
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
};
