import styled from 'styled-components';
import ContainerProps from './ContainerProps';

export { ContainerProps };
export default styled.div<ContainerProps>`
  background: ${({ theme }) => theme.shade.lightest};
  min-height: ${({ fullHeight }) => fullHeight && '100vh'};
  align-items: ${({ alignCenter }) => alignCenter && 'center'};
  justify-content: ${({ justifyCenter }) => justifyCenter && 'center'};
  display: flex;
  flex-direction: column;
`;
