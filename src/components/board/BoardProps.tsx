import { HTMLAttributes } from 'react';

export default interface BoardProps extends HTMLAttributes<HTMLDivElement> {
  depth?: 1 | 2 | 3;
}
