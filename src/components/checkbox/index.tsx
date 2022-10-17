import React from 'react';
import { useId } from 'react';
import { Check } from '../../icons';
import CheckboxProps from './CheckboxProps';
import Input from './Input';
import Label from './Label';
import StyledCheck from './StyledCheck';
import Wrapper from './Wrapper';

export { CheckboxProps };
export default function Checkbox({
  label,
  wrapperStyle,
  variant,
  ...props
}: CheckboxProps) {
  const id = useId();
  return (
    <Wrapper style={wrapperStyle}>
      <Input
        {...props}
        type="checkbox"
        name={id}
        id={id}
        ref={null}
        variant={variant}
      />
      <StyledCheck htmlFor={id}>
        <Check />
      </StyledCheck>
      {label && <Label htmlFor={id}>{label}</Label>}
    </Wrapper>
  );
}
