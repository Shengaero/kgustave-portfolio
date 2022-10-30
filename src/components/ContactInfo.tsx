import React from 'react';
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem';

export default function ContactInfo(props: React.PropsWithChildren) {
  return (
    <Nav as="ol" className="justify-content-around">
      {props.children}
    </Nav>
  );
}

ContactInfo.Item = NavItem;
