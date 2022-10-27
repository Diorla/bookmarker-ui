import styled from 'styled-components';

export default styled.div<{ position: 'sticky' | 'absolute' | 'fixed' }>`
  background: ${({ theme }) => theme.shade.darkest};
  color: ${({ theme }) => theme.palette.main.white};
  position: ${({ position }) => position};
  bottom: 0;
  width: 100%;
  min-height: 4rem;
  flex: 1;
  flex-direction: row;
  display: flex;
  box-shadow: ${({ theme }) => theme.elevation.low};
  & * {
    color: white;
    color: ${({ theme }) => theme.shade.lightest};
  }
  & a:hover {
    color: ${({ theme }) => theme.shade.lighter};
  }
  & a:active {
    color: ${({ theme }) => theme.shade.light};
  }
`;
