import Container from '../container';
import LoaderProps from './LoaderProps';
import React from 'react';
import GlobalStyle from './GlobalStyle';
import Icon from './Icon';
import Body from './Body';
import { Heart } from '../../icons';

export { LoaderProps };
export default function Loader({ fullHeight, style }: LoaderProps) {
  return (
    <Container fullHeight={fullHeight} alignCenter justifyCenter style={style}>
      <Body>
        <GlobalStyle />
        <Icon>
          <Heart />
        </Icon>
      </Body>
    </Container>
  );
}
