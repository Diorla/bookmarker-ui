import styled from 'styled-components';
import TypographyProps from './TypographyProps';

export default styled.h1<TypographyProps>`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : theme.palette.main.black};
  margin-bottom: 0.5rem;
`;
