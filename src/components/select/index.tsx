import React, { useRef, useState } from 'react';
import { useClickAway } from '../../hooks';
import { UpArrow, DownArrow } from '../../icons';
import Header from './Header';
import Icon from './Icon';
import List from './List';
import SelectItem from './SelectItem';
import SelectProps from './SelectProps';
import Wrapper from './Wrapper';

export { SelectItem, SelectProps };
export default function Select({ title, children, ...props }: SelectProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setExpanded(false);
  });

  return (
    <Wrapper {...props} ref={ref}>
      <Header onClick={() => setExpanded(!expanded)}>
        <span>{title}</span>
        <Icon expanded={expanded}>
          {expanded ? <UpArrow /> : <DownArrow />}
        </Icon>
      </Header>
      <List expanded={expanded}>{children}</List>
    </Wrapper>
  );
}
