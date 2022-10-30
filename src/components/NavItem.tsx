import React from 'react';
import { Nav } from 'react-bootstrap';

type NavItemProps = React.PropsWithChildren & {
  href: string | URL;
  label: string;
  color?: 'primary' | 'secondary';
};

export default function NavItem(props: NavItemProps) {
  return (
    <Nav.Item as="li" className={`nav-item-${props.color || 'primary'}`}>
      {props.children}
      <Nav.Link active href={props.href?.toString()}>
        {props.label}
      </Nav.Link>
    </Nav.Item>
  );
}
