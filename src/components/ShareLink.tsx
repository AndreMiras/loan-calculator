import React, { FunctionComponent } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import LoanParamsProps from "./types";

const getParams = (
  amount: number,
  term: number,
  interest: number
): URLSearchParams => {
  const params = new URLSearchParams(useLocation().search);
  params.set("amount", amount.toString());
  params.set("term", term.toString());
  params.set("interest", interest.toString());
  return params;
};

const getSearch = (amount: number, term: number, interest: number): string =>
  "?" + getParams(amount, term, interest).toString();

const ShareLink: FunctionComponent<LoanParamsProps> = ({
  amount,
  term,
  interest,
}) => (
  <Nav.Link
    as={Link}
    to={{
      search: getSearch(amount, term, interest),
    }}
  >
    <FontAwesomeIcon icon={["fas", "share-alt"]} /> Share Loan
  </Nav.Link>
);

export default ShareLink;
