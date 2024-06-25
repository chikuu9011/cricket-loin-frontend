import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="crinav" expand="md">
      <Container>
        <Navbar.Brand href="/">
          cricket lion {/* Replace with your logo or brand name */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">contact us</Nav.Link>
            <Nav.Link href="/fees">fees</Nav.Link>
            <Nav.Link href="/matches">Matches</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/sign">Login/register</Nav.Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item href="/addmatches">Add matches</NavDropdown.Item>
            <NavDropdown.Item href="/feeschange">Fees-P/U</NavDropdown.Item>
          </NavDropdown>

            {/* Add more Nav.Link components as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
