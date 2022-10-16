import styled from 'styled-components';
import TypographyProps from './TypographyProps';

export default styled.h2<TypographyProps>`
  font-size: 2.6rem;
  font-weight: 500;
  color: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : theme.palette.main.black};
  margin-bottom: 0.5rem;
`;
