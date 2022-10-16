import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, Select, SelectItem } from '../src';

const meta: Meta = {
  title: 'Select',
  component: Select,
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

export const SelectExample: Story = _args => {
  const [value, setValue] = useState('');
  const list = ['One', 'Two', 'Three', 'Four', 'Five'];
  return (
    <Container fullHeight alignCenter>
      <div>It is at the top</div>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        It interacts appropriately
        <Select title={value || 'Select a number'} style={{ fontSize: 16 }}>
          {list.map(item => (
            <SelectItem
              onClick={() => setValue(item)}
              active={value === item}
              key={item}
            >
              {item}
            </SelectItem>
          ))}
        </Select>
        <Select title={value || 'Select a number'}>
          {list.map(item => (
            <SelectItem
              onClick={() => setValue(item)}
              active={value === item}
              key={item}
            >
              {item}
            </SelectItem>
          ))}
        </Select>
        with surrounding text
      </div>
      <div>It interacts appropriately with surrounding text</div>
    </Container>
  );
};
