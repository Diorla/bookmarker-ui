import React from 'react';
import MenuItemProps from './MenuItemProps';
import StyledMenuItem from './StyledMenuItem';

export default function MenuItem({ active, ...props }: MenuItemProps) {
  return (
    <StyledMenuItem {...props} className={active ? 'active' : ''} ref={null} />
  );
}
