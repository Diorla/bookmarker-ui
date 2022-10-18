import React from 'react';
import styled from 'styled-components';
import { AvatarProps, shape, shapes } from '../avatar/index';

export const FigCaption = styled.figcaption`
  text-align: center;
  box-shadow: ${({ theme }) => theme.elevation.low};
  margin-top: 0.2rem;
`;

const ImageWrapper = styled.figure<{ shape?: shape }>`
  box-shadow: ${({ theme }) => theme.elevation.low};
  padding: 0.2rem 0.3rem 0.3rem 0.2rem;
  aspect-ratio: 1/1;
  border-radius: ${({ shape = 'square' }) => shapes[shape]};
  & > img {
    box-shadow: none;
    padding: 0;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: ${({ shape = 'square' }) => shapes[shape]};
  }
`;

export interface FigureProps extends AvatarProps {
  caption: string;
}

export default function Figure({
  caption,
  shape,
  style,
  ...props
}: FigureProps) {
  return (
    <ImageWrapper shape={shape} style={style}>
      <img {...props} style={undefined} />
      <FigCaption>{caption}</FigCaption>
    </ImageWrapper>
  );
}
