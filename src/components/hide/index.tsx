import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../theme';
import HideProps from './HideProps';

const StyledWrapper = styled.div<{ hide: boolean }>`
  display: ${({ hide }) => hide && 'none'};
`;

export { HideProps };
export default function Hide({
  children,
  xsDown,
  xsUp,
  smDown,
  smUp,
  mdDown,
  mdUp,
  lgDown,
  lgUp,
  xlDown,
  xlUp,
}: HideProps) {
  const { width } = useWindowSize();
  let hide = false;

  if (xsDown && width < theme.breakpoint.xs) hide = true;
  if (smDown && width < theme.breakpoint.sm) hide = true;
  if (mdDown && width < theme.breakpoint.md) hide = true;
  if (lgDown && width < theme.breakpoint.lg) hide = true;
  if (xlDown && width < theme.breakpoint.xl) hide = true;
  if (xsUp && width >= theme.breakpoint.xs) hide = true;
  if (smUp && width >= theme.breakpoint.sm) hide = true;
  if (mdUp && width >= theme.breakpoint.md) hide = true;
  if (lgUp && width >= theme.breakpoint.lg) hide = true;
  if (xlUp && width >= theme.breakpoint.xl) hide = true;

  return <StyledWrapper hide={hide}>{children}</StyledWrapper>;
}
