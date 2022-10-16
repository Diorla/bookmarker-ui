import styled from 'styled-components';
import StyledChip from './StyledChip';

export default styled(StyledChip)`
  &:hover {
    box-shadow: ${({ theme }) => theme.depth.medium};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.depth.deep};
  }
`;
