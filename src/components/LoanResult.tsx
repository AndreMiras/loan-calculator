import React, { FunctionComponent } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { computeMonthlyPayment } from '../utils/index';

type LoanResultProps = {
  amount: number,
  term: number,
  interest: number,
}

const LoanResult: FunctionComponent<LoanResultProps> = ({ amount, term, interest }) => {
  const monthlyPayment = computeMonthlyPayment(amount, term, interest);
  const totalInterest = monthlyPayment * term * 12;
  const total = amount + totalInterest;
  return (
    <Card className="mt-4">
      <Card.Header>Loan Result</Card.Header>
      <Card.Body>
        <Card.Title>Monthly Payment: { monthlyPayment.toFixed(2) }</Card.Title>
        <Row>
          <Col md={6}>Principal paid:</Col>
          <Col md={6}>{ amount.toFixed(2) }</Col>
          <Col md={6}>Interest paid:</Col>
          <Col md={6}>{ totalInterest.toFixed(2) }</Col>
          <Col md={6}>Total paid:</Col>
          <Col md={6}>{ total.toFixed(2) }</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LoanResult;
