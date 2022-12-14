import { useId } from 'react';
import TextareaProps from './TextareaProps';
import Label from './Label';
import StyledTextarea from './StyledTextarea';
import Wrapper from './Wrapper';
import React from 'react';
import InputError from '../../InputError';

export { TextareaProps };
export default function Textarea({
  label,
  errorText,
  ...props
}: TextareaProps) {
  const id = useId();
  return (
    <Wrapper style={props.style}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextarea {...props} id={id} ref={null} />
      {errorText && <InputError>{errorText}</InputError>}
    </Wrapper>
  );
}
