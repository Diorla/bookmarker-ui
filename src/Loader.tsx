import React from 'react';
import Container from './Container';
import spinner from './assets/spinner';

export default function Loader() {
  return (
    <Container fullHeight alignCenter justifyCenter>
      <img src={spinner} />
    </Container>
  );
}
