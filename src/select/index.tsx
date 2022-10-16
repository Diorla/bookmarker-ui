import React, { useRef, useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import useClickAway from '../hooks/useClickAway';
import Header from './Header';
import Icon from './Icon';
import List from './List';
import SelectItem from './SelectItem';
import SelectProps from './SelectProps';
import Wrapper from './Wrapper';

export { SelectItem };
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
          {expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </Icon>
      </Header>
      <List expanded={expanded}>{children}</List>
    </Wrapper>
  );
}
