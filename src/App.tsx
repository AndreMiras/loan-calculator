import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import LoanChart from "./components/LoanChart";
import LoanForm from "./components/LoanForm";
import LoanResult from "./components/LoanResult";
import { computeLoanParameters } from "./utils/index";

library.add(fas, fab);

const App = (): JSX.Element => {
  const params = new URLSearchParams(useLocation().search);
  const [amount, setAmount] = useState(Number(params.get("amount") || 0));
  const [term, setTerm] = useState(Number(params.get("term") || 0));
  const [interest, setInterest] = useState(Number(params.get("interest") || 0));
  const { monthlyPayment, totalInterest, total } = computeLoanParameters(
    amount,
    term,
    interest
  );
  return (
    <div className="App">
      <Header amount={amount} term={term} interest={interest} />
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} className="mt-3">
            <LoanForm
              amount={amount}
              onAmount={setAmount}
              term={term}
              onTerm={setTerm}
              interest={interest}
              onInterest={setInterest}
            />
          </Col>
          <Col sm={12} md={6} lg={4} className="mt-3">
            <LoanResult
              monthlyPayment={monthlyPayment}
              amount={amount}
              totalInterest={totalInterest}
              total={total}
            />
          </Col>
          <Col lg={4} className="mt-3">
            <LoanChart
              amount={amount}
              totalInterest={totalInterest}
              total={total}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
