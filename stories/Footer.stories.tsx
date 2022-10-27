import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, Footer, FooterSegment, Link, Typography } from '../src';
import styled from 'styled-components';
import { ArrowUp } from '../src/icons';

const meta: Meta = {
  title: 'Footer',
  component: Footer,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const FooterHeader = styled(Typography)`
  margin: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterExample: Story = _args => {
  const arr: string[] = [];
  arr.length = 100;
  arr.fill('hello');
  return (
    <div id="top">
      <Container>
        {arr.map((_item, idx) => (
          <div key={idx}>Hello world</div>
        ))}
        <div>Hello there</div>
      </Container>
      <Footer>
        <FooterSegment>
          <Link
            href="https://bookmarker-one.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy and Policy
          </Link>
        </FooterSegment>
        <FooterSegment>
          <FooterHeader>Download</FooterHeader>
          <Column>
            <Link
              href="https://chrome.google.com/webstore/detail/bookmarker/akbpnbpmfmelpdpiepfmjdemfkeamhcf"
              target="_blank"
              rel="noreferrer"
            >
              Chrome
            </Link>
            <Link
              href="https://addons.mozilla.org/en-US/firefox/addon/multimark/"
              target="_blank"
              rel="noreferrer"
            >
              Firefox
            </Link>
            <Link href="https://adeolaade.com" target="_blank" rel="noreferrer">
              Safari
            </Link>
          </Column>
        </FooterSegment>
        <FooterSegment>
          <Link href="https://adeolaade.com" target="_blank" rel="noreferrer">
            &copy; Ade Adeola
          </Link>
          <div>
            <Link href="#top" style={{ display: 'flex', alignItems: 'center' }}>
              Top
              <ArrowUp />
            </Link>
          </div>
        </FooterSegment>
      </Footer>
    </div>
  );
};
