import styled from 'styled-components';

export default styled.a`
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.light};
  }
  &:active {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
