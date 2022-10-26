import styled from 'styled-components';
import TypographyProps from './TypographyProps';

export default styled.h5<TypographyProps>`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${({ theme, variant }) =>
    variant ? theme.palette[variant].main : theme.palette.main.black};
  margin-bottom: 0.5rem;
`;
