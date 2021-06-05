import { computeMonthlyPayment } from './index';

describe('computeMonthlyPayment', () => {
  it('computeMonthlyPayment', () => {
    const amount = 195400;
    const term = 20;
    const interest = 1.9;
    const expected = 979.2686608905237;
    expect(
      computeMonthlyPayment(amount, term, interest)
    ).toBe(expected);
  });
});
