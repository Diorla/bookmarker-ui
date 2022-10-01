import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import Theme from './interfaces/Theme';

export interface Props extends HTMLAttributes<HTMLDivElement> {}

const StyledDiv = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.main.black};
  background-color: ${({ theme }: { theme: Theme }) => theme.shade.darkest};
`;

export const Thing: FC<Props> = ({ children }) => {
  return (
    <StyledDiv>
      {children || `the snozzberries taste like snozzberries`}
    </StyledDiv>
  );
};
