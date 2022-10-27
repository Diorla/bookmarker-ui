import React, { HTMLAttributes } from 'react';
import Wrapper from './Wrapper';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  position?: 'sticky' | 'absolute' | 'fixed';
}

export default function Footer({ position = 'sticky', ...props }: FooterProps) {
  return <Wrapper position={position} {...props} />;
}
