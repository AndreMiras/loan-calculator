import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";
import LoanParamsProps from "./types";
import ShareLink from "./ShareLink";

const Header: FunctionComponent<LoanParamsProps> = ({
  amount,
  term,
  interest,
}) => (
  <Navbar bg="dark" variant="dark" expand="sm">
    <Container>
      <Navbar.Brand href={process.env.PUBLIC_URL}>
        <FontAwesomeIcon icon={["fas", "calculator"]} /> Loan Calculator
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href={process.env.PUBLIC_URL}>
            <FontAwesomeIcon icon={["fas", "home"]} /> Home
          </Nav.Link>
          <ShareLink amount={amount} term={term} interest={interest} />
          <Nav.Link href="https://github.com/AndreMiras/loan-calculator">
            <FontAwesomeIcon icon={["fab", "github-alt"]} /> About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
