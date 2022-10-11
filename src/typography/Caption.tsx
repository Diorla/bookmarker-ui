import styled from 'styled-components';
import TypographyProps from './TypographyProps';

export default styled.div<TypographyProps>`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : theme.palette.main.black};
  text-align: center;
`;
