import styled from 'styled-components';
import CardProps from './CardProps';

const list = ['shallow', 'medium', 'deep'];

export { CardProps };

export default styled.div<CardProps>`
  box-shadow: ${({ theme, depth = 1 }) => theme.depth[list[depth - 1]]};
  width: clamp(120px, 90%, 960px);
  border-radius: 0.4rem;
`;
