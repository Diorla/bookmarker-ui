import styled from 'styled-components';

export default styled.li<{ active?: boolean }>`
  padding: 4px;
  margin: 8px;
  box-shadow: ${({ theme, active }) => (active ? theme.depth.shallow : 'none')};
  cursor: pointer;
  &:hover {
    box-shadow: ${({ theme, active }) =>
      active ? theme.depth.medium : theme.depth.shallow};
  }
`;
