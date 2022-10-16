import React from 'react';
import ChipProps from './ChipProps';
import Clickable from './Clickable';
import StyledChip from './StyledChip';

export { ChipProps };

export default function Chip({ title, ...props }: ChipProps) {
  const { onClick, disabled } = props;
  if (onClick && !disabled) return <Clickable {...props}>{title}</Clickable>;
  return <StyledChip {...props}>{title}</StyledChip>;
}
