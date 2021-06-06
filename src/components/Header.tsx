import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = (): JSX.Element => (
  <Navbar bg="dark" variant="dark" expand="sm" className="mb-4">
    <Container>
      <Navbar.Brand href={process.env.PUBLIC_URL}>Loan Calculator</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href={process.env.PUBLIC_URL}>Home</Nav.Link>
          <Nav.Link href="https://gitlab.com/andre.miras/loan-calculator">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
