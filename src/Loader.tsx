import React from 'react';
import Container from './Container';
import spinner from './assets/spinner.gif';

export default function Loader() {
  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <img src={spinner} />
    </Container>
  );
}
