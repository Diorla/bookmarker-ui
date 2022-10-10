import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Hide, HideProps, Container, theme } from '../src';
import useWindowSize from '../src/hooks/useWindowSize';

const meta: Meta = {
  title: 'Hide',
  component: Hide,
  argTypes: {
    children: {
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

export const Template: Story<HideProps> = _args => {
  const { width } = useWindowSize();
  return (
    <Container fullHeight alignCenter justifyCenter>
      <div>size: {width}</div>
      <Hide xsDown>xsDown: {theme.breakpoint.xs}</Hide>
      <Hide xsUp>xsUp: {theme.breakpoint.xs}</Hide>
      <Hide smDown>smDown: {theme.breakpoint.sm}</Hide>
      <Hide smUp>smUp: {theme.breakpoint.sm}</Hide>
      <Hide mdDown>mdDown: {theme.breakpoint.md}</Hide>
      <Hide mdUp>mdUp: {theme.breakpoint.md}</Hide>
      <Hide lgDown>lgDown: {theme.breakpoint.lg}</Hide>
      <Hide lgUp>lgUp: {theme.breakpoint.lg}</Hide>
      <Hide xlDown>xlDown: {theme.breakpoint.xl}</Hide>
      <Hide xlUp>xlUp: {theme.breakpoint.xl}</Hide>
    </Container>
  );
};
