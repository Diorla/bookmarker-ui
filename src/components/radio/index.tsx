import React from 'react';
import { useId } from 'react';
import { Dot } from '../../icons';
import Input from './Input';
import Label from './Label';
import RadioProps from './RadioProps';
import StyledCheck from './StyledCheck';
import Wrapper from './Wrapper';

export { RadioProps };

export default function Radio({
  label,
  wrapperStyle,
  variant,
  ...props
}: RadioProps) {
  const id = useId();
  return (
    <Wrapper style={wrapperStyle}>
      <Input
        {...props}
        type="radio"
        name={id}
        id={id}
        ref={null}
        variant={variant}
      />
      <StyledCheck htmlFor={id}>
        <Dot />
      </StyledCheck>
      {label && <Label htmlFor={id}>{label}</Label>}
    </Wrapper>
  );
}
