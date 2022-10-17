import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export default interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  wrapperStyle?: React.CSSProperties;
  variant?: 'primary' | 'secondary';
}
