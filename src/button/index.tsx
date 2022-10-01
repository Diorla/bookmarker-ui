import React from 'react';
import ButtonProps from './ButtonProps';
import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function Button({ children, variant, ...props }: ButtonProps) {
  if (variant === 'primary')
    return (
      <PrimaryButton {...props} ref={null}>
        {children}
      </PrimaryButton>
    );
  if (variant === 'secondary')
    return (
      <SecondaryButton {...props} ref={null}>
        {children}
      </SecondaryButton>
    );
  return (
    <DefaultButton {...props} ref={null}>
      {children}
    </DefaultButton>
  );
}
