import styled from 'styled-components';

export default styled.a`
  padding: 0.4rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 0.4rem;
  max-width: 15rem;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.main.black};
  margin: 0.4rem 0.6rem;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: ${({ theme }) => theme.elevation.low};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.depth.medium};
  }
  &.active:active {
    box-shadow: ${({ theme }) => theme.depth.deep};
  }
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: ${({ theme }) => theme.depth.shallow};
  }
`;
