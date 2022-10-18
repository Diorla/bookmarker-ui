import styled from 'styled-components';

export default styled.ul<{ expanded: boolean }>`
  background: ${({ theme }) => theme.shade.lightest};
  position: absolute;
  display: ${({ expanded }) => (expanded ? 'initial' : 'none')};
  margin: 0;
  flex: 1;
  list-style: none;
  margin: 0;
  margin-top: 42px;
  padding: 0;
  box-shadow: ${({ theme }) => theme.elevation.low};
  z-index: ${({ theme }) => theme.stack.modal};
`;
