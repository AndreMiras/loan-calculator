
/**
 * https://fr.wikipedia.org/wiki/Mensualit%C3%A9#Calcul_formel
 * TODO: typing and move to an util that can be tested separately
 */
const computeMonthlyPayment = (amount: number, term: number, interest: number) : number => {
  interest /= 100;
  return (amount * interest / 12) / (1 - (1 / (Math.pow((1 + (interest / 12)), term * 12))));
};

export { computeMonthlyPayment };
