import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavItem from './NavItem';

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
        <Navbar.Brand className='d-flex h1 fs-2 mb-0' href="/">
          <img
            className="navbar-brand-icon"
            src={brand.img.toString()}
            alt="Logo"
          />
          <span className="align-self-center">{brand.name}</span>
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

HeaderNav.Item = NavItem;

export default HeaderNav;
