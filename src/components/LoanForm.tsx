import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AmountField = (): JSX.Element => (
  <Form.Group controlId="loan-amount">
    <Form.Label>Loan Amount</Form.Label>
    <Form.Control type="number" placeholder="200000" />
    <Form.Text className="text-muted">
      The amount to borrow.
    </Form.Text>
  </Form.Group>
);

const TermField = (): JSX.Element => (
  <Form.Group controlId="loan-term">
    <Form.Label>Loan Term</Form.Label>
    <Form.Control type="number" placeholder="20" />
    <Form.Text className="text-muted">
      The loan repayment period in years.
    </Form.Text>
  </Form.Group>
);

const InterestRateField = (): JSX.Element => (
  <Form.Group controlId="loan-interest-rate">
    <Form.Label>Interest Rate</Form.Label>
    <Form.Control type="number" placeholder="2.0" />
    <Form.Text className="text-muted">
      The percentage interest rate.
    </Form.Text>
  </Form.Group>
);

const LoanForm = (): JSX.Element => (
  <Form>
    <AmountField />
    <TermField />
    <InterestRateField />
    <Button variant="primary" type="button">
      Calculate
    </Button>
  </Form>
);

export default LoanForm;
