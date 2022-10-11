import styled from 'styled-components';
import TypographyProps from './TypographyProps';

export default styled.h3<TypographyProps>`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : theme.palette.main.black};
  margin-bottom: 0.5rem;
`;
