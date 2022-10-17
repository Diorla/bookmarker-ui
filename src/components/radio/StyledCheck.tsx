import styled from 'styled-components';

export default styled.label`
  box-shadow: ${({ theme }) => theme.elevation.medium};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  font-size: 20px;
  border: none;
  background-color: ${({ theme }) => theme.shade.lightest};
  color: ${({ theme }) => theme.shade.darker};
  &:active {
    box-shadow: ${({ theme }) => theme.depth.medium};
  }
`;
