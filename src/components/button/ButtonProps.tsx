import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export default interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Indicates whether to use the primary or secondary colour as background
   * if not provided, it will used the default gray colour
   */
  variant?: 'primary' | 'secondary';
}
