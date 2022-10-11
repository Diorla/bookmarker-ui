import styled from 'styled-components';
import TypographyProps from './TypographyProps';

export default styled.div<TypographyProps>`
  font-size: 0.8rem;
  color: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : theme.palette.main.black};
  margin-top: 0.2rem;
  margin-left: 0.4rem;
  font-style: italic;
`;
