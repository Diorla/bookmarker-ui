import styled from 'styled-components';
import BoardProps from './BoardProps';

const list = ['shallow', 'medium', 'deep'];

export { BoardProps };

export default styled.div<BoardProps>`
  box-shadow: ${({ theme, depth = 1 }) => theme.depth[list[depth - 1]]};
  width: clamp(120px, 90%, 960px);
  border-radius: 0.4rem;
`;
