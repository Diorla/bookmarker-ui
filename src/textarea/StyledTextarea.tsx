import styled from 'styled-components';
import { darken } from '../scripts/color-functions';

export default styled.textarea`
  padding: 0.6rem 0.8rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  box-shadow: ${({ theme }) => theme.depth.shallow};
  background: none;
  font-family: inherit;
  color: ${({ theme }) => theme.palette.main.black};
  resize: vertical;
  &::-moz-placeholder {
    color: ${({ theme }) => theme.shade.dark};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.shade.dark};
  }
  &::placeholder {
    color: ${({ theme }) => theme.shade.dark};
  }
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.palette.main.black};
    box-shadow: ${({ theme }) => theme.depth.medium};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => darken(theme.shade.darkest, 0.4)};
  }
`;
