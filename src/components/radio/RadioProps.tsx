import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export default interface RadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  wrapperStyle?: React.CSSProperties;
  variant?: 'primary' | 'secondary';
}
