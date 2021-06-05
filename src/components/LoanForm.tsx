import React, { FunctionComponent, ChangeEvent } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

type onNumberChangeCallback = (value: number) => void;

type AmountFieldProps = {
  onChange: onNumberChangeCallback,
};

const eventTargetValueNumber = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => Number(e.target.value);

const AmountField: FunctionComponent<AmountFieldProps> = ({ onChange }) => (
  <Form.Group controlId="loan-amount">
    <Form.Label>Loan Amount</Form.Label>
    <Form.Control type="number" placeholder="200000" onChange={(e) => onChange(eventTargetValueNumber(e))} />
    <Form.Text className="text-muted">
      The amount to borrow.
    </Form.Text>
  </Form.Group>
);

type TermFieldProps = {
  onChange: onNumberChangeCallback,
};

const TermField: FunctionComponent<TermFieldProps> = ({ onChange }) => (
  <Form.Group controlId="loan-term">
    <Form.Label>Loan Term</Form.Label>
    <Form.Control type="number" placeholder="20" onChange={(e) => onChange(eventTargetValueNumber(e))} />
    <Form.Text className="text-muted">
      The loan repayment period in years.
    </Form.Text>
  </Form.Group>
);

type InterestRateFieldProps = {
  onChange: onNumberChangeCallback,
};

const InterestRateField: FunctionComponent<InterestRateFieldProps> = ({ onChange }) => (
  <Form.Group controlId="loan-interest-rate">
    <Form.Label>Interest Rate</Form.Label>
    <Form.Control type="number" placeholder="2.0" onChange={(e) => onChange(eventTargetValueNumber(e))} />
    <Form.Text className="text-muted">
      The percentage interest rate.
    </Form.Text>
  </Form.Group>
);


type LoanFormProps = {
  onAmount: onNumberChangeCallback,
  onTerm: onNumberChangeCallback,
  onInterest: onNumberChangeCallback,
};
const LoanForm: FunctionComponent<LoanFormProps> = ({ onAmount, onTerm, onInterest }) => (
  <Card className="mt-4">
    <Card.Header>Loan Form</Card.Header>
    <Card.Body>
      <Form>
        <AmountField onChange={onAmount} />
        <TermField onChange={onTerm} />
        <InterestRateField onChange={onInterest} />
        <Button variant="primary" type="button">
          Calculate
        </Button>
      </Form>
    </Card.Body>
  </Card>
);

export default LoanForm;
