import { FaHeart } from 'react-icons/fa';
import Container from '../container';
import LoaderProps from './LoaderProps';
import React from 'react';
import GlobalStyle from './GlobalStyle';
import Icon from './Icon';
import Body from './Body';

export { LoaderProps };
export default function Loader({ fullHeight, style }: LoaderProps) {
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
