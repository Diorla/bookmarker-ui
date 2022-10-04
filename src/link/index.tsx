import React from 'react';
import LinkProps from './LinkProps';
import StyledLink from './StyledLink';

export { LinkProps };

export default function Link(props: LinkProps) {
  return <StyledLink {...props} ref={null} />;
}
