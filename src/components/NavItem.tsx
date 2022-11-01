import React from 'react';
import { Modal, Nav } from 'react-bootstrap';

// basic core NavItem properties
type NavItemProps<R = 'link' | 'modal' | 'basic'> = React.PropsWithChildren & {
  type?: R;
  label?: string;
  color?: 'primary' | 'secondary';
  className?: string;
};

// NavItem properties for a NavItem used as a link
type LinkNavItemProps = NavItemProps<'link'> & {
  href: string | URL;
  newTab?: boolean;
};

// NavItem properties for a NavItem used to control a modal
type ModalNavItemProps = NavItemProps<'modal'> & {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
  modalClassName?: string;
};

type BasicNavItemProps = NavItemProps<'basic'> & {};

const formatClassName = (props: NavItemProps) =>
  `my-1 nav-item-${props.color || 'primary'}${props.className ? ' ' + props.className : ''}`;

const LinkNavItem = (props: LinkNavItemProps) => (
  <Nav.Item as="li" className={formatClassName(props)}>
    <Nav.Link active
      href={props.href.toString()}
      target={props.newTab ? '_blank' : '_self'}
      rel={props.newTab ? 'noreferrer' : 'alternate'}>
      {props.children}
      {props.label ? ` ${props.label}` : ''}
    </Nav.Link>
  </Nav.Item>
);

const ModalNavItem = (props: ModalNavItemProps) => (
  <Nav.Item as="li" className={formatClassName(props)}>
    {/* notice that the Nav.Link is rendered as a <span> */}
    <Nav.Link as="span" active onClick={props.handleShow}>
      {props.label || ''}
    </Nav.Link>
    <Modal className={props.modalClassName} show={props.show} onHide={props.handleClose}>
      {props.children}
    </Modal>
  </Nav.Item>
);

const BasicNavItem = (props: BasicNavItemProps) => (
  <Nav.Item as="li" className={formatClassName(props)}>
    {props.children}
  </Nav.Item>
);

export default function NavItem(props: LinkNavItemProps | ModalNavItemProps | BasicNavItemProps) {
  // switch case on props.type
  switch(props.type) {
    // for undefined and 'link'
    case undefined:
    case 'link':
      // cast props to LinkNavItem (unsafe)
      props = props as LinkNavItemProps;
      // if href prop does not exist
      if(!props.href) {
        // throw error
        throw new Error('Missing "href" prop for NavItem with type "link"');
      }
      // return rendered LinkNavItem
      return (<LinkNavItem {...props} />);
    // for 'modal'
    case 'modal':
      // return rendered ModalNavItem
      return (<ModalNavItem {...props} />);
    case 'basic':
      return (<BasicNavItem {...props} />);
  }
}
