import React, { FunctionComponent } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import LoanParamsProps from "./types";

const useLoanSearchParams = (
  amount: number,
  term: number,
  interest: number
) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  params.set("amount", amount.toString());
  params.set("term", term.toString());
  params.set("interest", interest.toString());
  return params.toString();
};

const ShareLink: FunctionComponent<LoanParamsProps> = ({
  amount,
  term,
  interest,
}) => (
  <Nav.Link
    as={Link}
    to={{
      search: useLoanSearchParams(amount, term, interest),
    }}
  >
    <FontAwesomeIcon icon={["fas", "share-alt"]} /> Share Loan
  </Nav.Link>
);

export default ShareLink;
