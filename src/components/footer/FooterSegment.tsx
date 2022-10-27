import styled from 'styled-components';

export default styled.div`
  flex: 1;
  padding: 0.1rem 0.2rem;
  margin: 0.2rem 0;
  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;
