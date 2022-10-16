import styled from 'styled-components';

export default styled.div`
  box-shadow: ${({ theme }) => theme.elevation.low};
  border-radius: 0 0 1rem 1rem;
  display: flex;
  align-items: center;
  position: sticky;
  padding: 0.4rem;
  width: clamp(120px, 90%, 90%);
  justify-content: space-evenly;
  top: 0;
  background-color: ${({ theme }) => theme.shade.lightest};
  z-index: 1;
  margin: 0 auto;
`;
