import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Header from './components/Header';
import LoanForm from './components/LoanForm';
import LoanResult from './components/LoanResult';

const App = (): JSX.Element => {
  const [amount, setAmount] = useState(200000);
  const [term, setTerm] = useState(20);
  const [interest, setInterest] = useState(1.9);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Row>
          <Col>
            <LoanForm onAmount={setAmount} onTerm={setTerm} onInterest={setInterest} />
          </Col>
          <Col>
            <LoanResult amount={amount} term={term} interest={interest} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
