import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 42px;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
