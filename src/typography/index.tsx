import React from 'react';
import Caption from './Caption';
import HeaderFive from './HeaderFive';
import HeaderFour from './HeaderFour';
import HeaderOne from './HeaderOne';
import HeaderSix from './HeaderSix';
import HeaderThree from './HeaderThree';
import HeaderTwo from './HeaderTwo';
import Subtitle from './Subtitle';
import Text from './Text';
import TypographyProps from './TypographyProps';

export { TypographyProps };

export default function Typography({
  children,
  variant,
  type,
  ...props
}: TypographyProps) {
  if (type === 'h1')
    return (
      <HeaderOne variant={variant} {...props}>
        {children}
      </HeaderOne>
    );
  if (type === 'h2')
    return (
      <HeaderTwo variant={variant} {...props}>
        {children}
      </HeaderTwo>
    );
  if (type === 'h3')
    return (
      <HeaderThree variant={variant} {...props}>
        {children}
      </HeaderThree>
    );
  if (type === 'h4')
    return (
      <HeaderFour variant={variant} {...props}>
        {children}
      </HeaderFour>
    );
  if (type === 'h5')
    return (
      <HeaderFive variant={variant} {...props}>
        {children}
      </HeaderFive>
    );
  if (type === 'h6')
    return (
      <HeaderSix variant={variant} {...props}>
        {children}
      </HeaderSix>
    );
  if (type === 'caption')
    return (
      <Caption variant={variant} {...props}>
        {children}
      </Caption>
    );
  if (type === 'subtitle')
    return (
      <Subtitle variant={variant} {...props}>
        {children}
      </Subtitle>
    );
  return <Text variant={variant}>{children}</Text>;
}
