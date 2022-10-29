import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

type HeaderNavProps = React.PropsWithChildren & {
  brand: {
    name: string;
    img: string | URL;
  };
};

const HeaderNav = ({ brand, children }: HeaderNavProps) => (
  <header>
    <Navbar variant="dark" expand="lg" bg="primary">
      <Container fluid className="d-flex flex-row-reverse flex-lg-row justify-content-between">
        <Navbar.Brand className='h1 fs-2 mb-0' href="/">
          <img
            className="navbar-brand-icon"
            src={brand.img.toString()}
            alt="Logo"
          />
          {brand.name}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav as="ol">
            {children}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

type HeaderNavItemProps = { href: string, label: string; };
HeaderNav.Item = (props: HeaderNavItemProps) => (
  <Nav.Item as="li">
    <Nav.Link className="text-highlight" active href={props.href}>{props.label}</Nav.Link>
  </Nav.Item>
);

export default HeaderNav;
