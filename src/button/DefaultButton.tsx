import styled from 'styled-components';
import MainButton from './MainButton';

export default styled(MainButton)`
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.depth.medium};
  }
`;
