import styled from 'styled-components';

export default styled.button<{ expanded: boolean }>`
  background-color: transparent;
  box-shadow: ${({ theme, expanded }) =>
    expanded ? theme.depth.shallow : theme.elevation.low};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 24px;
  padding: 2px;
  cursor: pointer;
  margin-left: 20px;
  &: active {
    box-shadow: ${({ theme }) => theme.depth.shallow};
  }
`;
