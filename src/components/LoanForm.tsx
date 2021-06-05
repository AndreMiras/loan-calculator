import React, { FunctionComponent, ChangeEvent } from 'react';
import { Col, Card, Form } from 'react-bootstrap';

type onNumberChangeCallback = (value: number) => void;

const eventTargetValueNumber = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => Number(e.target.value);

type CustomFormGroupProps = {
  controlId: string,
  label: string,
  placeholder: string,
  text: string,
  onChange: onNumberChangeCallback,
};

const CustomFormGroup: FunctionComponent<CustomFormGroupProps> = ({ controlId, label, placeholder, text, onChange }) => (
  <Form.Group className="row" controlId={controlId}>
    <Form.Label className="col-sm-7 col-form-label">{label}</Form.Label>
    <Col sm={5}>
      <Form.Control type="number" placeholder={placeholder} onChange={(e) => onChange(eventTargetValueNumber(e))} />
    </Col>
    <Col xs={12}>
      <Form.Text className="text-muted">
        {text}
      </Form.Text>
    </Col>
  </Form.Group>
);

type FieldProps = {
  onChange: onNumberChangeCallback,
};

const AmountField: FunctionComponent<FieldProps> = ({ onChange }) => (
  <CustomFormGroup controlId="loan-amount" label="Loan Amount" placeholder="200000" text="The amount to borrow" onChange={onChange} />
);

const TermField: FunctionComponent<FieldProps> = ({ onChange }) => (
  <CustomFormGroup controlId="loan-term" label="Loan Term" placeholder="20" text="The loan repayment period in years." onChange={onChange} />
);

const InterestRateField: FunctionComponent<FieldProps> = ({ onChange }) => (
  <CustomFormGroup controlId="loan-interest-rate" label="Interest Rate" placeholder="1.9" text="The percentage interest rate." onChange={onChange} />
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
      </Form>
    </Card.Body>
  </Card>
);

export default LoanForm;
