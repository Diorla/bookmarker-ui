import styled from 'styled-components';
import TypographyProps from './TypographyProps';

export default styled.h6<TypographyProps>`
  font-size: 1rem;
  font-weight: 900;
  color: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : theme.palette.main.black};
  margin-bottom: 0.5rem;
`;
