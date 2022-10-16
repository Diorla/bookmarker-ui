import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import Container from '../Container';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const outside_grow = keyframes`
    from {
      width: 1.25rem;
      height: 1.25rem;
      opacity: 1;
    }
    to {
      width: 10rem;
      height: 10rem;
      opacity: 0.5;
    }
  `;

const inside_grow = keyframes`
    from {
      width: 0;
      height: 0;
    }
    to {
      width: 20rem;
      height: 20rem;
    }
  `;

const Icon = styled.span`
  position: absolute;
  z-index: 10;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.shade.lightest};
  border: none;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.elevation.medium};

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Body = styled.div`
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

export default function TempLoader({
  fullHeight,
  style,
}: {
  fullHeight?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <Container fullHeight={fullHeight} alignCenter justifyCenter style={style}>
      <Body>
        <GlobalStyle />
        <Icon>
          <FaHeart />
        </Icon>
      </Body>
    </Container>
  );
}
