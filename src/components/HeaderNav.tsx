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
    <Navbar variant="dark" expand="lg">
      <Container fluid className="d-flex flex-row-reverse flex-lg-row justify-content-between">
        <Navbar.Brand className='d-flex flex-row-reverse flex-lg-row me-0 me-lg-2 mb-0 fs-2' href="/">
          <img className="navbar-brand-icon" src={brand.img.toString()} alt="Logo" />
          <h1 className="align-self-center mb-0">{brand.name}</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
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
