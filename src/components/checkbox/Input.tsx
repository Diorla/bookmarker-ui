import styled from 'styled-components';

export default styled.input<{ variant?: 'primary' | 'secondary' }>`
  display: none;
  &:disabled ~ label {
    color: ${({ theme }) => theme.shade.dark};
    cursor: not-allowed;
  }
  &:checked + label {
    box-shadow: ${({ theme }) => theme.depth.shallow};
    color: ${({ variant = 'primary', theme }) => theme.palette[variant].dark};
  }
  &:checked + label:active {
    box-shadow: ${({ theme }) => theme.depth.medium};
  }
`;
