import { computeLoanParameters, computeMonthlyPayment } from './index';

describe('computeMonthlyPayment', () => {
  it('basic case', () => {
    const amount = 195400;
    const term = 20;
    const interest = 1.9;
    const expected = 979.2686608905237;
    expect(
      computeMonthlyPayment(amount, term, interest)
    ).toBe(expected);
  });
});


describe('computeLoanParameters', () => {
  it('basic case', () => {
    const amount = 195400;
    const term = 20;
    const interest = 1.9;
    const expected = {
      monthlyPayment: 979.2686608905237,
      totalInterest: 39624.47861372572,
      total: 235024.47861372572,
    };
    expect(
      computeLoanParameters(amount, term, interest)
    ).toStrictEqual(expected);
  });
});
