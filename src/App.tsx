import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import Header from "./components/Header";
import LoanChart from "./components/LoanChart";
import LoanForm from "./components/LoanForm";
import LoanResult from "./components/LoanResult";
import { computeLoanParameters } from "./utils/index";

const App = (): JSX.Element => {
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);
  const { monthlyPayment, totalInterest, total } = computeLoanParameters(
    amount,
    term,
    interest
  );
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <LoanForm
              onAmount={setAmount}
              onTerm={setTerm}
              onInterest={setInterest}
            />
          </Col>
          <Col>
            <LoanResult
              monthlyPayment={monthlyPayment}
              amount={amount}
              totalInterest={totalInterest}
              total={total}
            />
          </Col>
          <Col>
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
