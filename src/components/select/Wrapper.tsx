import styled from 'styled-components';

export default styled.div`
  background: ${({ theme }) => theme.shade.lightest};
  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;
  font-size: 18px;
`;
