import React from 'react';
import { Nav } from 'react-bootstrap';

type NavItemProps = React.PropsWithChildren & {
  href: string | URL;
  label: string;
  newTab?: boolean;
  color?: 'primary' | 'secondary';
  className?: string;
};

export default function NavItem(props: NavItemProps) {
  return (
    <Nav.Item as="li" className={`my-1 nav-item-${props.color || 'primary'}${props.className ? ' ' + props.className : ''}`}>
      <Nav.Link active href={props.href?.toString()}
        target={props.newTab ? '_blank' : '_self'}
        rel={props.newTab ? 'noreferrer' : 'alternate'}>
        {props.children} {props.label}
      </Nav.Link>
    </Nav.Item>
  );
}
