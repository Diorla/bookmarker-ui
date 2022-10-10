import { HTMLAttributes } from 'react';

export default interface CardProps extends HTMLAttributes<HTMLDivElement> {
  depth?: 1 | 2 | 3;
}
