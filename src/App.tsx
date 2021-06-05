import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Header from './components/Header';
import LoanChart from './components/LoanChart';
import LoanForm from './components/LoanForm';
import LoanResult from './components/LoanResult';
import { computeLoanParameters } from './utils/index';

const App = (): JSX.Element => {
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);
  const { monthlyPayment, totalInterest, total } = computeLoanParameters(amount, term, interest);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Row>
          <Col>
            <LoanForm onAmount={setAmount} onTerm={setTerm} onInterest={setInterest} />
          </Col>
          <Col>
            <LoanResult monthlyPayment={monthlyPayment} amount={amount} totalInterest={totalInterest} total={total} />
          </Col>
          <Col>
            <LoanChart amount={amount} totalInterest={totalInterest} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
