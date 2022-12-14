import styled from 'styled-components';

export default styled.button`
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.elevation.medium};
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease;
  color: ${({ theme }) => theme.palette.main.black};
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  &:hover {
    box-shadow: ${({ theme }) => theme.elevation.low};
  }
  &:disabled {
    cursor: not-allowed;
    box-shadow: ${({ theme }) => theme.depth.shallow};
    opacity: 0.7;
  }
  &:disabled:hover {
    box-shadow: ${({ theme }) => theme.depth.shallow};
    color: ${({ theme }) => theme.palette.main.black};
  }
`;
