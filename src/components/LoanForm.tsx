import React, { FunctionComponent, ChangeEvent } from "react";
import { Col, Card, Form } from "react-bootstrap";
import LoanParamsProps from "./types";

type onNumberChangeCallback = (value: number) => void;

const eventTargetValueNumber = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => Number(e.target.value);

type CustomFormGroupProps = {
  controlId: string;
  label: string;
  placeholder: string;
  text: string;
  defaultValue: number;
  onChange: onNumberChangeCallback;
};
const CustomFormGroup: FunctionComponent<CustomFormGroupProps> = ({
  controlId,
  label,
  placeholder,
  text,
  defaultValue,
  onChange,
}) => (
  <Form.Group className="row" controlId={controlId}>
    <Form.Label className="col-sm-7 col-form-label">{label}</Form.Label>
    <Col sm={5}>
      <Form.Control
        type="number"
        placeholder={placeholder}
        defaultValue={defaultValue || ""}
        onChange={(e) => onChange(eventTargetValueNumber(e))}
      />
    </Col>
    <Col xs={12}>
      <Form.Text className="text-muted d-none d-md-block">{text}</Form.Text>
    </Col>
  </Form.Group>
);

type FieldProps = {
  defaultValue: number;
  onChange: onNumberChangeCallback;
};

const AmountField: FunctionComponent<FieldProps> = ({
  defaultValue,
  onChange,
}) => (
  <CustomFormGroup
    controlId="loan-amount"
    label="Loan Amount"
    placeholder="200000"
    text="The amount to borrow"
    defaultValue={defaultValue}
    onChange={onChange}
  />
);

const TermField: FunctionComponent<FieldProps> = ({
  defaultValue,
  onChange,
}) => (
  <CustomFormGroup
    controlId="loan-term"
    label="Loan Term"
    placeholder="20"
    text="The loan repayment period in years."
    defaultValue={defaultValue}
    onChange={onChange}
  />
);

const InterestRateField: FunctionComponent<FieldProps> = ({
  defaultValue,
  onChange,
}) => (
  <CustomFormGroup
    controlId="loan-interest-rate"
    label="Interest Rate"
    placeholder="1.9"
    text="The percentage interest rate."
    defaultValue={defaultValue}
    onChange={onChange}
  />
);

type LoanFormProps = LoanParamsProps & {
  onAmount: onNumberChangeCallback;
  onTerm: onNumberChangeCallback;
  onInterest: onNumberChangeCallback;
};
const LoanForm: FunctionComponent<LoanFormProps> = ({
  amount,
  onAmount,
  term,
  onTerm,
  interest,
  onInterest,
}) => (
  <Card>
    <Card.Header className="d-none d-md-block">Loan Form</Card.Header>
    <Card.Body>
      <Form>
        <AmountField defaultValue={amount} onChange={onAmount} />
        <TermField defaultValue={term} onChange={onTerm} />
        <InterestRateField defaultValue={interest} onChange={onInterest} />
      </Form>
    </Card.Body>
  </Card>
);

export default LoanForm;
