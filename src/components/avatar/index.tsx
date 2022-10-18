import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export const shapes = {
  circle: '50%',
  rounded: '0.4rem',
  square: '',
};

export type shape = keyof typeof shapes;

const StyledImage = styled.img<{ shape: shape }>`
  box-shadow: ${({ theme }) => theme.elevation.low};
  padding: 0.2rem 0.3rem 0.3rem 0.2rem;
  border-radius: ${({ shape }) => shapes[shape]};
  aspect-ratio: 1/1;
`;

export interface AvatarProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  shape?: shape;
}

export default function Avatar({ src, ...props }: AvatarProps) {
  return <StyledImage src={src} shape="square" {...props} ref={null} />;
}
