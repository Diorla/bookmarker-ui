import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Header, Hide, Input, MenuItem } from '../src';

const meta: Meta = {
  title: 'Header',
  component: Header,
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

export const HeaderExample: Story = _args => {
  const [search, setSearch] = useState('');
  return (
    <Header style={{ justifyContent: 'space-between' }}>
      <MenuItem active>
        <img
          src="https://bookmarker-one.vercel.app/favicon.ico"
          style={{ height: 24, width: 24 }}
        />
      </MenuItem>
      <Hide smDown>
        <Input
          type="search"
          placeholder="filter"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Hide>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MenuItem active>Profile</MenuItem>
        <MenuItem>Sign out</MenuItem>
      </div>
    </Header>
  );
};
