import React from 'react';
import { useId } from 'react';
import InputError from '../InputError';
import InputProps from './InputProps';
import Label from './Label';
import StyledInput from './StyledInput';
import Wrapper from './Wrapper';

export { InputProps };

export default function Input({ label, errorText, ...props }: InputProps) {
  const id = useId();
  return (
    <Wrapper style={props.style}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput {...props} id={id} ref={null} style={{}} />
      {errorText && <InputError>{errorText}</InputError>}
    </Wrapper>
  );
}
