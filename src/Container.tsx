import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.shade.lightest};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
