import styled from 'styled-components';
import TypographyProps from './TypographyProps';

export default styled.div<TypographyProps>`
  color: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : theme.palette.main.black};
  margin-bottom: 1rem;
`;
