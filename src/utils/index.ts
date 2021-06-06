/**
 * https://fr.wikipedia.org/wiki/Mensualit%C3%A9#Calcul_formel
 */
const computeMonthlyPayment = (
  amount: number,
  term: number,
  interest: number
): number => {
  interest /= 100;
  return (
    (amount * interest) / 12 / (1 - 1 / Math.pow(1 + interest / 12, term * 12))
  );
};

const computeLoanParameters = (
  amount: number,
  term: number,
  interest: number
): { monthlyPayment: number; totalInterest: number; total: number } => {
  const monthlyPayment = computeMonthlyPayment(amount, term, interest);
  const total = monthlyPayment * term * 12;
  const totalInterest = total - amount;
  return {
    monthlyPayment: monthlyPayment,
    totalInterest: totalInterest,
    total: total,
  };
};

export { computeMonthlyPayment, computeLoanParameters };
