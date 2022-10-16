import styled from 'styled-components';
import outside_grow from './outside_grow';
import inside_grow from './inside_grow';

export default styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  box-shadow: ${({
    theme: {
      palette: {
        primary: { dark, light },
      },
    },
  }) => `1.25rem 1.25rem 3.75rem ${dark}, -1.25rem -1.25rem 3.75rem ${light}`};
  box-shadow: ;
  animation: ${outside_grow} infinite 3s alternate ease-out;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    box-shadow: ${({
      theme: {
        palette: {
          primary: { dark, light },
        },
      },
    }) =>
      `inset 1.25rem 1.25rem 3.75rem ${dark}, inset -1.25rem -1.25rem 3.75rem ${light}`};
    animation: ${inside_grow} infinite 3s alternate ease-out;
  }
`;
