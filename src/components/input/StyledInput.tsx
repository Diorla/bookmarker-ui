import styled from 'styled-components';

export default styled.input`
  padding: 0.4rem 0.6rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  box-shadow: ${({ theme }) => theme.depth.shallow};
  background: none;
  font-family: inherit;
  color: ${({ theme }) => theme.palette.main.black};
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
    color: ${({ theme }) => theme.shade.darkest};
  }
`;
