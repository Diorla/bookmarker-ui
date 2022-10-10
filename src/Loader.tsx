import React from 'react';
import Container from './Container';
import spinner from './assets/spinner';

export default function Loader({ fullHeight }: { fullHeight?: boolean }) {
  return (
    <Container fullHeight={fullHeight} alignCenter justifyCenter>
      <img src={spinner} />
    </Container>
  );
}
