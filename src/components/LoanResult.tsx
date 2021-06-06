import React, { FunctionComponent } from "react";
import { Card, Col, Row } from "react-bootstrap";

type LoanResultProps = {
  monthlyPayment: number;
  amount: number;
  totalInterest: number;
  total: number;
};

const LoanResult: FunctionComponent<LoanResultProps> = ({
  monthlyPayment,
  amount,
  totalInterest,
  total,
}) => (
  <Card className="mt-4">
    <Card.Header>Loan Result</Card.Header>
    <Card.Body>
      <Card.Title className="text-center">Monthly Payment</Card.Title>
      <h3 className="text-center">{monthlyPayment.toFixed(2)}</h3>
      <hr />
      <Row>
        <Col xs={6}>Principal paid:</Col>
        <Col xs={6} className="text-right">
          {amount.toFixed(2)}
        </Col>
        <Col xs={6}>Interest paid:</Col>
        <Col xs={6} className="text-right">
          {totalInterest.toFixed(2)}
        </Col>
        <Col xs={12}>
          <hr />
        </Col>
        <Col xs={6}>Total paid:</Col>
        <Col xs={6} className="text-right">
          {total.toFixed(2)}
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default LoanResult;
