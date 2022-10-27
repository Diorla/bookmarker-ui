import styled from 'styled-components';

export default styled.button`
  box-shadow: ${({ theme }) => theme.depth.shallow};
  border-radius: 2rem;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.black};
  border: none;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  &:disabled {
    color: ${({ theme }) => theme.shade.darker};
    cursor: default;
  }
`;
