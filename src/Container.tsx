import styled from 'styled-components';

/**
 * Used to wrap everything up.
 * @param {boolean} props - The args accepted by container.
 * @param {boolean} props.fullHeight - Fill the entire height of the view port
 * @param {boolean} props.alignCenter - center the children along the cross axis
 * @param {boolean} props.justifyCenter - centers the children along the main axis
 */
export default styled.div<{
  fullHeight?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
}>`
  background: ${({ theme }) => theme.shade.lightest};
  min-height: ${({ fullHeight }) => fullHeight && '100vh'};
  align-items: ${({ alignCenter }) => alignCenter && 'center'};
  justify-content: ${({ justifyCenter }) => justifyCenter && 'center'};
  display: flex;
  flex-direction: column;
`;
