import styled from 'styled-components';
import MainButton from './MainButton';

export default styled(MainButton)`
  background: ${({ theme }) => theme.palette.primary.main};
  box-shadow: ${({ theme }) => theme.elevation.high};
  color: ${({ theme }) => theme.palette.main.white};
  &:hover {
    color: ${({ theme }) => theme.shade.lightest};
    box-shadow: ${({ theme }) => theme.elevation.low};
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 0.25rem
        ${({ theme }) => theme.palette.primary.dark},
      inset -0.2rem -0.2rem 0.25rem
        ${({ theme }) => theme.palette.primary.light};
  }
  &:disabled {
    cursor: not-allowed;
    box-shadow: inset 0.1rem 0.1rem 0.125rem
        ${({ theme }) => theme.palette.primary.dark},
      inset -0.1rem -0.1rem 0.125rem
        ${({ theme }) => theme.palette.primary.light};
    opacity: 0.7;
  }
  &:disabled:hover {
    color: ${({ theme }) => theme.palette.main.white};
    box-shadow: inset 0.1rem 0.1rem 0.125rem
        ${({ theme }) => theme.palette.primary.dark},
      inset -0.1rem -0.1rem 0.125rem
        ${({ theme }) => theme.palette.primary.light};
  }
`;
