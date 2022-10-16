import styled from 'styled-components';

export default styled.span`
  position: absolute;
  z-index: 10;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.shade.lightest};
  border: none;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.elevation.medium};

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
