import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, LinkProps } from '../src';

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

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
};
